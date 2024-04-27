// Generated from yv-compiler/src/antlr/Yarnova.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./YarnovaParser";
import { StatementContext } from "./YarnovaParser";
import { LambdaDeclarationContext } from "./YarnovaParser";
import { LambdaExpressionContext } from "./YarnovaParser";
import { VariableDeclarationContext } from "./YarnovaParser";
import { ArrayDeclarationContext } from "./YarnovaParser";
import { TypeAnnotationContext } from "./YarnovaParser";
import { InitialValueContext } from "./YarnovaParser";
import { FunctionDeclarationContext } from "./YarnovaParser";
import { FunctionCallContext } from "./YarnovaParser";
import { FunctionCallParamListContext } from "./YarnovaParser";
import { ParameterListContext } from "./YarnovaParser";
import { ParameterContext } from "./YarnovaParser";
import { BlockContext } from "./YarnovaParser";
import { BlockStatementContext } from "./YarnovaParser";
import { ReturnExpressionContext } from "./YarnovaParser";
import { JsxDeclarationContext } from "./YarnovaParser";
import { TagTypeContext } from "./YarnovaParser";
import { StylingDeclarationContext } from "./YarnovaParser";
import { StylingPropertyContext } from "./YarnovaParser";
import { LogDeclarationContext } from "./YarnovaParser";
import { ExpressionContext } from "./YarnovaParser";
import { ClosureContext } from "./YarnovaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `YarnovaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class YarnovaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `YarnovaParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.lambdaDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaDeclaration?: (ctx: LambdaDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.arrayDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDeclaration?: (ctx: ArrayDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.typeAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.initialValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitialValue?: (ctx: InitialValueContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.functionCallParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallParamList?: (ctx: FunctionCallParamListContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.returnExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnExpression?: (ctx: ReturnExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.jsxDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxDeclaration?: (ctx: JsxDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.tagType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagType?: (ctx: TagTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.stylingDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStylingDeclaration?: (ctx: StylingDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.stylingProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStylingProperty?: (ctx: StylingPropertyContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.logDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogDeclaration?: (ctx: LogDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `YarnovaParser.closure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosure?: (ctx: ClosureContext) => Result;
}

