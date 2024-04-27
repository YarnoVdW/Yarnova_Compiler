import { Lexer, Parser, Visitor } from 'yv-parser';
import { CharStream, CommonTokenStream } from 'antlr4';

const loader = function (source: string) {
    const chars = new CharStream(source);
    const lexer = Lexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = Parser(tokens);

    const context = parser.program();
    const visitor = Visitor();
    const result = visitor.visit(context);
    console.log("result: ", result);
    let resultString = "";
    for (let i = 0; i < result.length; i++) {
        resultString += result[i] + '\n';
    }
    return resultString;
}

export default loader;
