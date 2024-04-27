import loader from "../src/ts/loader";

test('declaringANumberShouldWork', (): void => {
    const obj = loader(numberDeclaration)
    console.log(obj)
    expect(obj.toString()).not.toBe('let b: number = 3;');
    expect(obj.toString().trim()).toBe('let b = 3;');
})

const numberDeclaration = `
let b: number = 3;
`

test('declaringAnIntegerShouldNotWork', (): void => {
    const obj = () => loader(integerDeclaration)
    console.log(obj)
    expect(obj).toThrow("Type is not supported!");
})

const integerDeclaration = `
let b: int = 3;
`

test('declaringAStringShouldWork', (): void => {
    const obj = loader(stringDeclaration)
    console.log(obj)
    expect(obj.toString()).not.toBe('let b: string = "hello";');
    expect(obj.toString().trim()).toBe('let b = "hello";');
})

const stringDeclaration = `
let b: string = "hello";
`

test('declaringABooleanShouldWork', (): void => {
    const obj = loader(booleanDeclaration)
    console.log(obj)
    expect(obj.toString()).not.toBe('let b: boolean = "true";');
    expect(obj.toString().trim()).toBe('let b = true;');
})

const booleanDeclaration = `
let b: boolean = true;
`

test('declaringAFunctionShouldWork', (): void => {
    const obj = loader(functionDeclaration)
    console.log(obj)
    expect(obj.toString()).not.toBe('func helloWorld() {}');
    expect(obj.toString().trim()).toBe('function helloWorld() {\n' +
        '\tconsole.log("HelloWorld");\n' +
        '}');
})

const functionDeclaration = `
func helloWorld() {
    print("HelloWorld");
}
`

test('declaringAFunctionWithReturnValueAndReturnInBodyShouldWork', (): void => {
    const obj = loader(functionDeclarationWithReturnBody)
    console.log(obj)
    expect(obj.toString()).not.toBe('func helloWorld() {}');
    expect(obj.toString().trim()).toBe('function helloWorld() {\n' +
        '\treturn "HelloWorld"}');
})

const functionDeclarationWithReturnBody = `
func helloWorld(): string {
    return "HelloWorld";
}
`

test('declaringAFunctionWithoutReturnExpressionShouldNotWork', (): void => {
    const obj = () => loader(functionDeclarationWithoutReturnExpression)
    console.log(obj)
    expect(obj).toThrow("Return expression cannot be empty!");
})

const functionDeclarationWithoutReturnExpression = `
func helloWorld(): string {
    return ;
}
`

test('declaringAFunctionWithAReturnValueWithoutReturnBoddyShouldNotWork', (): void => {
    const obj = () => loader(functionDeclarationWithoutReturn)
    expect(obj).toThrowError("Function helloWorld has a return type annotation but no return statement in the body");
})

const functionDeclarationWithoutReturn = `
func helloWorld(): string {
    let a = "hello";
}
`

test('declaringAFunctionWithAParameterShouldWork', (): void => {
    const obj = loader(functionDeclarationWithParameter)
    console.log(obj)
    expect(obj.toString().trim()).toBe('function helloWorld(a) {\n' +
        '\tconsole.log("HelloWorld");\n' +
        '}');
})

const functionDeclarationWithParameter = `
func helloWorld(a) {
    print("HelloWorld");
}
`

test('declaringAFunctionWithMultipleParametersShouldWork', (): void => {
    const obj = loader(functionDeclarationWithMultipleParameters)
    console.log(obj)
    expect(obj.toString().trim()).toBe('function helloWorld(a, b) {\n' +
        '\tconsole.log("HelloWorld");\n' +
        '}');
})

const functionDeclarationWithMultipleParameters = `
func helloWorld(a, b) {
    print("HelloWorld");
}
`

test('declaringAFunctionCallShouldWork', (): void => {
    const obj = loader(functionCall)
    console.log(obj)
    expect(obj.toString().trim()).toBe('helloWorld()');
})

const functionCall = `
helloWorld();
`

test('declaringAFunctionCallWithParameterShouldWork', (): void => {
    const obj = loader(functionCallWithParameter)
    console.log(obj)
    expect(obj.toString().trim()).toBe('helloWorld("hello")');
})

const functionCallWithParameter = `
helloWorld("hello");
`

test('declaringAFunctionCallWithMultipleParametersShouldWork', (): void => {
    const obj = loader(functionCallWithMultipleParameters)
    console.log(obj)
    expect(obj.toString().trim()).toBe('helloWorld("hello", "world")');
})

const functionCallWithMultipleParameters = `
helloWorld("hello", "world");
`

test('declaringCorrectYarnovaJSXShouldWork', (): void => {
    const obj = loader(correctJSX)
    console.log(obj)
    expect(obj.toString().trim()).toBe('Yarnova.createElement(\'p\', null, \'hello\')');
});

const correctJSX = `
<p>hello</p>
`
test('declaringInCorrectYarnovaJSXShouldNotWork', (): void => {
    const obj = () => loader(inCorrectJsx)
    console.log(obj)
    expect(obj).toThrow("Tag types do not match!");
});

const inCorrectJsx = `
<p>hello</div>
`
test('nestingJSXShouldWork', (): void => {
    const obj = loader(correctNestedJSX)
    console.log(obj)
    expect(obj.toString().trim()).toBe('Yarnova.createElement(\'p\', null, \'hello\', Yarnova.createElement(\'strong\', null, \'world\'))');
});

const correctNestedJSX = `
<p>hello<strong>world</strong></p>
`

test('declaringALambdaFunctionShouldWork', (): void => {
    const obj = loader(lambdaDeclaration)
    console.log(obj)
    expect(obj.toString().trim()).toBe('let testLambda = () => {\n' +
        '\tconsole.log("hello");\n' +
        '}');
});

const lambdaDeclaration = `
const testLambda = () => {
    print("hello");
}
`

test('declarinAnArrayShouldWork', (): void => {
    const obj = loader(arrayDeclaration)
    console.log(obj)
    expect(obj.toString().trim()).toBe('const cars = ["Saab", "Volvo", "BMW"];');
});

const arrayDeclaration = `
arr cars: string = ["Saab", "Volvo", "BMW"];
`
test('declarinAnEmptyArrayShouldNotWork', (): void => {
    const obj = () => loader(arrayDeclarationWithNoValues)
    console.log(obj)
    expect(obj).toThrow("Array cannot be empty!");
});

const arrayDeclarationWithNoValues = `
arr cars: string = [];
`





