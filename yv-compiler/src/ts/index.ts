import YarnovaLexer from "./YarnovaLexer";
import YarnovaParser  from "./YarnovaParser";
import {CharStream, CommonTokenStream} from "antlr4";
import MyVisitor from "./MyVisitor";


export const Lexer = (chars: CharStream): YarnovaLexer => {
    return new YarnovaLexer(chars);
}

export const Parser = (tokens: CommonTokenStream): YarnovaParser => {
    return new YarnovaParser(tokens);
}

export const Visitor = (): MyVisitor => {
    return new MyVisitor();
}

