grammar Yarnova;

program: statement*;

statement : variableDeclaration | functionDeclaration | jsxDeclaration | logDeclaration | functionCall | lambdaDeclaration | arrayDeclaration;

lambdaDeclaration : 'const' Identifier  '= (' parameterList? ')' (':' typeAnnotation)? '=>' lambdaExpression closure?;

lambdaExpression : expression | block | functionCall | logDeclaration;

variableDeclaration : 'let' Identifier (':' typeAnnotation)? ('=' initialValue)? closure?;

arrayDeclaration : 'arr' Identifier (':' typeAnnotation)? '=' '[' expression (', ' expression)* ']' closure?;

typeAnnotation : 'string' | 'number' | 'boolean';

initialValue : expression;

functionDeclaration : 'func' Identifier '(' parameterList? ')' (':' typeAnnotation)? block;

functionCall : Identifier ('.'Identifier)* '(' (functionCallParamList | expression | functionCall)? ')' closure?;

functionCallParamList : expression (', ' expression)*;

parameterList : parameter (', ' parameter)*;

parameter : Identifier (':' typeAnnotation)?;

block : '{' (blockStatement* | returnExpression?) '}';

blockStatement : variableDeclaration | logDeclaration ;

returnExpression : 'return' (expression | jsxDeclaration)* closure?;

jsxDeclaration: '<' tagType stylingDeclaration? '>' Identifier? (jsxDeclaration (Identifier? jsxDeclaration*))? '</' tagType '>';

tagType : Identifier ;

stylingDeclaration : 'style={' stylingProperty '}';

stylingProperty : Identifier ('-' Identifier)? ':' Identifier (';' stylingProperty)*;

logDeclaration : 'print(' (Literal | Identifier | functionCall) ')' closure?;

expression : Literal | '(' expression ')' | Identifier;

closure: ';';


Identifier : [a-zA-Z0-9_][a-zA-Z0-9_]*;
Literal : StringLiteral | NumericLiteral | BooleanLiteral;
StringLiteral : '"' .*? '"';
NumericLiteral : [0-9]+;
BooleanLiteral : 'true' | 'false';
WS : [ \t\r\n]+ -> skip;
