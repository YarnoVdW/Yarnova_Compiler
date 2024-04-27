# Programmeren - 3 - Frontend Framework (Yarnova)
## Van de Weyer Yarno


### Commando's

```bash
cd yv-compiler # vanuit root folder van project
npm run build

cd ../yv-loader # vanuit compiler
npm run build
npm run test # voor testen


cd ../yarnova # vanuit loader
npm run build

cd ../Demo # vanuit loader of yarnova
npm run build
npm run start # voor demo

# vanuit compiler project
java -jar ANTLR\ 4.13.1\ complete.jar -Dlanguage=TypeScript -visitor -no-listener  yv-compiler/src/antlr/Yarnova.g4
```

### Structuur
Declaratie van variabelen
```
let aNumber: number = 1;
let alsoANumber = 1;

let aString: string = "Hello";
let alsoAString = "Hello";

let aBoolean: boolean = true;
let alsoABoolean = true;

let vari;
```

Declaratie van functies
```
func aFunction(a: number) {
    let b: number = a;
    print(b);
}

aFunction(1);
```
Declaratie van functies met meerdere parameters
```
func aFunctionWithMultipleParams(a: number, b: string) {
    print(a);
    print(b);
}

aFunctionWithMultipleParams(1, "Hello");
```
Declaratie van lambda's
```
const testLambda = () => {
    print("hello");
}
```
Geneste JSX
```
func jsxTest(): string {
    return <div>a<h1><p>ptag</p>h1tag</h1></div>;
}
Yarnova.render(jsxTest())

```

Jsx with props
```
func jsxTestStyle(): string {
    return <div style={background-color:red}>a<h1 style={background-color:blue}><p style={background-color:green}>ptag</p>h1tag</h1></div>;
}
Yarnova.render(jsxTestStyle())
```

Print statement
```
print("HelloWorld");
# of
console.log("HelloWorld");
```

Array declaratie
```
arr cars = ["Saab", "Volvo", "BMW"];
```


## Building the previous statements gives:
```
/* provided dependency */ var Yarnova = __webpack_require__(/*! yarnova */ "../Yarnova/dist/index.js");
let aNumber = 1;
let alsoANumber = 1;
let aString = "Hello";
let alsoAString = "Hello";
let aBoolean = true;
let alsoABoolean = true;
let vari;
function aFunction(a) {
	let b = a;
console.log(b);
}
aFunction(1)
let testLambda = () => {
	console.log("hello");
}
function jsxTest() {
	return Yarnova.createElement('div', null, 'aDiv', Yarnova.createElement('h1', null, Yarnova.createElement('p', null, 'ptag'), 'h1tag'))}
Yarnova.render(jsxTest())
function jsxTestStyle() {
	return Yarnova.createElement('div', 'background-color:red', 'aDivColored', Yarnova.createElement('h1', 'background-color:blue', Yarnova.createElement('p', 'background-color:green', 'ptagColored'), 'h1tagColored'))}
Yarnova.render(jsxTestStyle())
console.log("HelloWorld");
console.log("HelloWorld")
function aFunctionWithMultipleParams(a, b) {
	console.log(a);
console.log(b);
}
aFunctionWithMultipleParams(1, "Hello")
const cars = ["Saab", "Volvo", "BMW"]

```

## EBNF
```
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

```

## Extra: styling demo
```
func testStyle() {
  return
    <div style={background-Color:lightblue;padding:20px;width:1000px;border-radius:10px;box-shadow:2px;display:flex;flex-direction:column;align-items:center;gap:10px}>
    <div style={display:flex;flex-direction:row;align-items:center;gap:20px}>
      <h1 style={font-Size:32px;color:navy;text-Decoration:underline;marginBottom:20px}>
        WelcometoYarnova
      </h1>
      <p style={font-Size:28px;lineHeight:1;marginBottom:25px}>
        ThisIs
      </p>
      <p style={font-Size:18px;lineHeight:1;color:green;text-align:center}>
        MyFrontendFramework
      </p>
      </div>
      <div style={display:flex;flex-direction:row;align-items:center;gap:20px}>
            <h1 style={font-Size:19px;color:purple;marginBottom:20px}>
              Yarnova
            </h1>
            <p style={font-Size:28px;lineHeight:1;marginBottom:25px}>
              Is
            </p>
            <p style={font-Size:18px;lineHeight:1;color:red;text-align:center}>
              TheNewestReact
            </p>
      </div>
      <div style={display:flex;flex-direction:row;gap:10px;align-items:start}>
        <p style={font-Size:20px;lineHeight:1;color:green;text-align:center}>
          whyIsItTheBest
        </p>
        <table style={background-color:red;align-items:start}>
          <tr style={padding:10px}>
            <td style={padding:5px}>
              <p style={font-size:12px;line-height:1; color:blue; text-align:center}>easyToUse</p>
            </td>
          </tr>
          <tr style={padding:10px}>
            <td style={padding:5px}>
              <p style={font-size:12px;line-height:1;color:purple;text-align:center}>fast</p>
            </td>
          </tr>
          <tr style={padding:10px}>
            <td style={padding:5px}>
              <p style={font-size:12px; line-height:1; color:yellow; text-align:center}>buildByYarno</p>
            </td>
          </tr>
        </table>
        </div>
    </div>;
}

Yarnova.render(testStyle())
```

