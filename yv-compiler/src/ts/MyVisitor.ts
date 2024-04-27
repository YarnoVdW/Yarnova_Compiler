import YarnovaVisitor from "./YarnovaVisitor"
import {
    ArrayDeclarationContext,
    BlockContext,
    ExpressionContext,
    FunctionCallContext,
    FunctionCallParamListContext,
    FunctionDeclarationContext,
    InitialValueContext,
    JsxDeclarationContext,
    LambdaDeclarationContext,
    LambdaExpressionContext,
    LogDeclarationContext,
    ParameterContext,
    ParameterListContext,
    ReturnExpressionContext,
    StatementContext, StylingDeclarationContext, StylingPropertyContext,
    TagTypeContext,
    TypeAnnotationContext,
    VariableDeclarationContext
} from "./YarnovaParser";


export default class MyVisitor extends YarnovaVisitor<string> {


    constructor() {
        super()
    }

    visitStatement = (ctx: StatementContext): string => {
        if (ctx.variableDeclaration()) {
            return this.visit(ctx.variableDeclaration());
        } else if (ctx.functionDeclaration()) {
            return this.visit(ctx.functionDeclaration());
        } else if (ctx.jsxDeclaration()) {
            return this.visit(ctx.jsxDeclaration());
        } else if (ctx.logDeclaration()) {
            return this.visit(ctx.logDeclaration());
        } else if (ctx.functionCall()) {
            return this.visitFunctionCall(ctx.functionCall());
        } else if (ctx.lambdaDeclaration()) {
            return this.visit(ctx.lambdaDeclaration());
        } else if (ctx.arrayDeclaration()) {
            return this.visit(ctx.arrayDeclaration());
        }
        return "";
    };

    visitArrayDeclaration = (ctx: ArrayDeclarationContext) => {
        const arrayName = ctx.Identifier().getText();
        let arrayValues = "";
        for(let i = 0; i < ctx.expression_list().length; i++) {
            if (ctx.expression_list()[i].getText() === "") {
                throw new Error("Array cannot be empty!");
            } else {
                arrayValues += this.visit(ctx.expression_list()[i]);
                if (i < ctx.expression_list().length - 1) {
                    arrayValues += ', ';
                }
            }
        }
        return `const ${arrayName} = [${arrayValues}];`;
    }

    visitLambdaDeclaration = (ctx: LambdaDeclarationContext): string => {
        const lambdaParameters = ctx.parameterList() == null ? "" : this.visit(ctx.parameterList());
        const lambdaBody = this.visit(ctx.lambdaExpression());
        const lambdaName = ctx.Identifier().getText();
        return 'let ' + lambdaName + ' = (' + lambdaParameters + ') => ' + lambdaBody;
    }
    visitLambdaExpression = (ctx: LambdaExpressionContext): string => {
        if (ctx.block()) {
            return this.visit(ctx.block());
        } else if (ctx.expression()) {
            return this.visit(ctx.expression());
        } else if (ctx.logDeclaration()) {
            return this.visit(ctx.logDeclaration());
        } else if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        }
        return "";
    }
    visitTypeAnnotation = (ctx: TypeAnnotationContext): string => {
        return ctx.getText();
    };
    visitReturnExpression = (ctx: ReturnExpressionContext): string => {

        let returnExpression = "";
        for (let i = 1; i < ctx.children.length - 1; i++) {
            returnExpression += this.visit(ctx.children[i]);
        }

        if (returnExpression === "") {
            throw new Error("Return expression cannot be empty!");
        }

        return "{\n\treturn " + returnExpression + "}";
    }
    visitInitialValue = (ctx: InitialValueContext): string => {
        if (ctx.expression()) {
            return this.visitExpression(ctx.expression());
        }
        return "";
    };
    visitFunctionCall = (ctx: FunctionCallContext): string => {
        const identifiers = ctx.Identifier ? ctx.Identifier_list().map((identifier: any) => identifier.getText()) : [];

        if (identifiers.length === 2) {
            const methodName = `${identifiers[0]}.${identifiers[1]}`;
            let param = this.getParams(ctx);
            return `${methodName}(${param})`;
        } else if (identifiers.length === 1) {
            const methodName = identifiers[0];
            let param = this.getParams(ctx);
            return `${methodName}(${param})`;
        } else if (identifiers.length > 0) {
            const methodName = identifiers[0];
            return `${methodName}()`;
        }

        return "";
    };

    private getParams(ctx: FunctionCallContext) {
        if (ctx.functionCallParamList()) {
            return this.visit(ctx.functionCallParamList());
        } else if (ctx.expression()) {
            return this.visit(ctx.expression());
        } else if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        } else {
            return "";
        }
    }

    visitFunctionCallParamList = (ctx: FunctionCallParamListContext): string => {
        let parameters = "";
        for (let i = 0; i < ctx.expression_list().length; i++) {
            parameters += this.visit(ctx.expression_list()[i]);
            if (i < ctx.expression_list().length - 1) {
                parameters += ', ';
            }
        }
        return parameters;
    }
    visitParameterList = (ctx: ParameterListContext): string => {
        let parameters = "";
        for (let i = 0; i < ctx.parameter_list().length; i++) {
            parameters += this.visit(ctx.parameter_list()[i]);
            if (i < ctx.parameter_list().length - 1) {
                parameters += ', ';
            }
        }
        return parameters;
    };
    visitParameter = (ctx: ParameterContext): string => {
        return ctx.Identifier().getText();
    };
    visitBlock = (ctx: BlockContext): string => {
        let statement = "";
        if (ctx.returnExpression()) {
            return this.visit(ctx.returnExpression());
        } else if (ctx.blockStatement) {
            for (let i = 0; i < ctx.blockStatement_list().length; i++) {
                statement += this.visit(ctx.blockStatement_list()[i]);
                if (i < ctx.blockStatement_list().length - 1) {
                    statement += '\n';
                }
            }
            return '{\n\t' + statement + '\n}';
        }
        return "";
    };
    visitTagType = (ctx: TagTypeContext): string => {
        return ctx.getText();
    };
    visitExpression = (ctx: ExpressionContext): string => {
        if (ctx.Literal()) {
            return ctx.Literal().getText();
        } else if (ctx.expression()) {
            return ctx.expression().getText();
        } else if (ctx.Identifier()) {
            return ctx.Identifier().getText();
        }
        return "";
    };

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext): string => {
        const functionName = ctx.Identifier().getText();
        const functionParameters = ctx.parameterList() == null ? "" : this.visit(ctx.parameterList());
        const functionBody = this.visit(ctx.block());
        if (ctx.typeAnnotation() != null) {
            if (functionBody.includes("return")) {
                return 'function ' + functionName + '(' + functionParameters + ') ' + this.visit(ctx.block().returnExpression());
            } else {
                throw new Error("Function " + functionName + " has a return type annotation but no return statement in the body");
            }
        }
        return 'function ' + functionName + '(' + functionParameters + ') ' + functionBody;
    };

    visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
        const allowedTypes = new Set(["string", "boolean", "number"]);
        if (ctx.typeAnnotation()) {
            const type = this.visit(ctx.typeAnnotation());
            if (!allowedTypes.has(type)) {
                throw new Error("Type is not supported!");
            }
        }
        const variableName = ctx.Identifier().getText();
        if(ctx.initialValue()) {
            const initialValue = this.visit(ctx.initialValue());
            return 'let ' + variableName + ' = ' + initialValue + ';';
        }
        return 'let ' + variableName + ';';
    };

    visitJsxDeclaration = (ctx: JsxDeclarationContext) => {
        const tagType = this.visit(ctx.tagType(0));
        const tagType2 = this.visit(ctx.tagType(1));

        if (tagType !== tagType2) {
            throw new Error("Tag types do not match!");
        }

        let styling = "";
        if(ctx.stylingDeclaration()) {
            styling += this.visit(ctx.stylingDeclaration());
        }
        let children;
        if (styling !== "") {
            children  = this.generateJsxElements(ctx.children, true);
            return `Yarnova.createElement('${tagType}', ${styling}${children})`;
        }
        children = this.generateJsxElements(ctx.children, false);
        return `Yarnova.createElement('${tagType}', null${children})`;
    };

    visitStylingDeclaration = (ctx: StylingDeclarationContext) => {
        let statement = "";
        statement += this.visit(ctx.stylingProperty());
        return statement;
    }

    visitStylingProperty = (ctx: StylingPropertyContext) => {
        return `'${ctx.getText()}'`;
    }

    generateJsxElements = (children: any[], hasStyle: boolean) => {
        let returnStatement = "";
        const slicedChildren = children.slice(hasStyle ? 4 : 3, children.length - 3);

        slicedChildren.forEach((child: any) => {
            if (child instanceof JsxDeclarationContext) {
                returnStatement += `, ${this.visitJsxDeclaration(child)}`;
            } else {
                const text = child.getText();
                if (text !== '') {
                    returnStatement += `, '${text}'`;
                }
            }
        });

        return returnStatement;
    };

    visitLogDeclaration = (ctx: LogDeclarationContext): string => {
        let logValue;
        if (ctx.Identifier()) {
            logValue = ctx.Identifier().getText();
        } else if (ctx.Literal()) {
            logValue = ctx.Literal().getText();
        } else if (ctx.functionCall()) {
            logValue = this.visit(ctx.functionCall());
        }
        return 'console.log(' + logValue + ');';
    }


}

