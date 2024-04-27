// Generated from yv-compiler/src/antlr/Yarnova.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import YarnovaVisitor from "./YarnovaVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class YarnovaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly Identifier = 28;
	public static readonly Literal = 29;
	public static readonly StringLiteral = 30;
	public static readonly NumericLiteral = 31;
	public static readonly BooleanLiteral = 32;
	public static readonly WS = 33;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_lambdaDeclaration = 2;
	public static readonly RULE_lambdaExpression = 3;
	public static readonly RULE_variableDeclaration = 4;
	public static readonly RULE_arrayDeclaration = 5;
	public static readonly RULE_typeAnnotation = 6;
	public static readonly RULE_initialValue = 7;
	public static readonly RULE_functionDeclaration = 8;
	public static readonly RULE_functionCall = 9;
	public static readonly RULE_functionCallParamList = 10;
	public static readonly RULE_parameterList = 11;
	public static readonly RULE_parameter = 12;
	public static readonly RULE_block = 13;
	public static readonly RULE_blockStatement = 14;
	public static readonly RULE_returnExpression = 15;
	public static readonly RULE_jsxDeclaration = 16;
	public static readonly RULE_tagType = 17;
	public static readonly RULE_stylingDeclaration = 18;
	public static readonly RULE_stylingProperty = 19;
	public static readonly RULE_logDeclaration = 20;
	public static readonly RULE_expression = 21;
	public static readonly RULE_closure = 22;
	public static readonly literalNames: (string | null)[] = [ null, "'const'", 
                                                            "'= ('", "')'", 
                                                            "':'", "'=>'", 
                                                            "'let'", "'='", 
                                                            "'arr'", "'['", 
                                                            "', '", "']'", 
                                                            "'string'", 
                                                            "'number'", 
                                                            "'boolean'", 
                                                            "'func'", "'('", 
                                                            "'.'", "'{'", 
                                                            "'}'", "'return'", 
                                                            "'<'", "'>'", 
                                                            "'</'", "'style={'", 
                                                            "'-'", "';'", 
                                                            "'print('" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "Identifier", 
                                                             "Literal", 
                                                             "StringLiteral", 
                                                             "NumericLiteral", 
                                                             "BooleanLiteral", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "lambdaDeclaration", "lambdaExpression", "variableDeclaration", 
		"arrayDeclaration", "typeAnnotation", "initialValue", "functionDeclaration", 
		"functionCall", "functionCallParamList", "parameterList", "parameter", 
		"block", "blockStatement", "returnExpression", "jsxDeclaration", "tagType", 
		"stylingDeclaration", "stylingProperty", "logDeclaration", "expression", 
		"closure",
	];
	public get grammarFileName(): string { return "Yarnova.g4"; }
	public get literalNames(): (string | null)[] { return YarnovaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return YarnovaParser.symbolicNames; }
	public get ruleNames(): string[] { return YarnovaParser.ruleNames; }
	public get serializedATN(): number[] { return YarnovaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, YarnovaParser._ATN, YarnovaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, YarnovaParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 404783426) !== 0)) {
				{
				{
				this.state = 46;
				this.statement();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, YarnovaParser.RULE_statement);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 52;
				this.variableDeclaration();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 53;
				this.functionDeclaration();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 54;
				this.jsxDeclaration();
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 55;
				this.logDeclaration();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 56;
				this.functionCall();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 57;
				this.lambdaDeclaration();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 58;
				this.arrayDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaDeclaration(): LambdaDeclarationContext {
		let localctx: LambdaDeclarationContext = new LambdaDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, YarnovaParser.RULE_lambdaDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.match(YarnovaParser.T__0);
			this.state = 62;
			this.match(YarnovaParser.Identifier);
			this.state = 63;
			this.match(YarnovaParser.T__1);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 64;
				this.parameterList();
				}
			}

			this.state = 67;
			this.match(YarnovaParser.T__2);
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 68;
				this.match(YarnovaParser.T__3);
				this.state = 69;
				this.typeAnnotation();
				}
			}

			this.state = 72;
			this.match(YarnovaParser.T__4);
			this.state = 73;
			this.lambdaExpression();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 74;
				this.closure();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let localctx: LambdaExpressionContext = new LambdaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, YarnovaParser.RULE_lambdaExpression);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 77;
				this.expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 78;
				this.block();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 79;
				this.functionCall();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 80;
				this.logDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, YarnovaParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this.match(YarnovaParser.T__5);
			this.state = 84;
			this.match(YarnovaParser.Identifier);
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 85;
				this.match(YarnovaParser.T__3);
				this.state = 86;
				this.typeAnnotation();
				}
			}

			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 89;
				this.match(YarnovaParser.T__6);
				this.state = 90;
				this.initialValue();
				}
			}

			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 93;
				this.closure();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayDeclaration(): ArrayDeclarationContext {
		let localctx: ArrayDeclarationContext = new ArrayDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, YarnovaParser.RULE_arrayDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			this.match(YarnovaParser.T__7);
			this.state = 97;
			this.match(YarnovaParser.Identifier);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 98;
				this.match(YarnovaParser.T__3);
				this.state = 99;
				this.typeAnnotation();
				}
			}

			this.state = 102;
			this.match(YarnovaParser.T__6);
			this.state = 103;
			this.match(YarnovaParser.T__8);
			this.state = 104;
			this.expression();
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 105;
				this.match(YarnovaParser.T__9);
				this.state = 106;
				this.expression();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 112;
			this.match(YarnovaParser.T__10);
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 113;
				this.closure();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeAnnotation(): TypeAnnotationContext {
		let localctx: TypeAnnotationContext = new TypeAnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, YarnovaParser.RULE_typeAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 28672) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initialValue(): InitialValueContext {
		let localctx: InitialValueContext = new InitialValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, YarnovaParser.RULE_initialValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, YarnovaParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this.match(YarnovaParser.T__14);
			this.state = 121;
			this.match(YarnovaParser.Identifier);
			this.state = 122;
			this.match(YarnovaParser.T__15);
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 123;
				this.parameterList();
				}
			}

			this.state = 126;
			this.match(YarnovaParser.T__2);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 127;
				this.match(YarnovaParser.T__3);
				this.state = 128;
				this.typeAnnotation();
				}
			}

			this.state = 131;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, YarnovaParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			this.match(YarnovaParser.Identifier);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 134;
				this.match(YarnovaParser.T__16);
				this.state = 135;
				this.match(YarnovaParser.Identifier);
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 141;
			this.match(YarnovaParser.T__15);
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 142;
				this.functionCallParamList();
				}
				break;
			case 2:
				{
				this.state = 143;
				this.expression();
				}
				break;
			case 3:
				{
				this.state = 144;
				this.functionCall();
				}
				break;
			}
			this.state = 147;
			this.match(YarnovaParser.T__2);
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 148;
				this.closure();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCallParamList(): FunctionCallParamListContext {
		let localctx: FunctionCallParamListContext = new FunctionCallParamListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, YarnovaParser.RULE_functionCallParamList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.expression();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 152;
				this.match(YarnovaParser.T__9);
				this.state = 153;
				this.expression();
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, YarnovaParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 159;
			this.parameter();
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
				{
				{
				this.state = 160;
				this.match(YarnovaParser.T__9);
				this.state = 161;
				this.parameter();
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, YarnovaParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 167;
			this.match(YarnovaParser.Identifier);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 168;
				this.match(YarnovaParser.T__3);
				this.state = 169;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, YarnovaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 172;
			this.match(YarnovaParser.T__17);
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===6 || _la===27) {
					{
					{
					this.state = 173;
					this.blockStatement();
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				{
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 179;
					this.returnExpression();
					}
				}

				}
				break;
			}
			this.state = 184;
			this.match(YarnovaParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let localctx: BlockStatementContext = new BlockStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, YarnovaParser.RULE_blockStatement);
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 186;
				this.variableDeclaration();
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 187;
				this.logDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnExpression(): ReturnExpressionContext {
		let localctx: ReturnExpressionContext = new ReturnExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, YarnovaParser.RULE_returnExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 190;
			this.match(YarnovaParser.T__19);
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 807469056) !== 0)) {
				{
				this.state = 193;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 16:
				case 28:
				case 29:
					{
					this.state = 191;
					this.expression();
					}
					break;
				case 21:
					{
					this.state = 192;
					this.jsxDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 198;
				this.closure();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsxDeclaration(): JsxDeclarationContext {
		let localctx: JsxDeclarationContext = new JsxDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, YarnovaParser.RULE_jsxDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
			this.match(YarnovaParser.T__20);
			this.state = 202;
			this.tagType();
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 203;
				this.stylingDeclaration();
				}
			}

			this.state = 206;
			this.match(YarnovaParser.T__21);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 207;
				this.match(YarnovaParser.Identifier);
				}
			}

			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 210;
				this.jsxDeclaration();
				{
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===28) {
					{
					this.state = 211;
					this.match(YarnovaParser.Identifier);
					}
				}

				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===21) {
					{
					{
					this.state = 214;
					this.jsxDeclaration();
					}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
			}

			this.state = 222;
			this.match(YarnovaParser.T__22);
			this.state = 223;
			this.tagType();
			this.state = 224;
			this.match(YarnovaParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tagType(): TagTypeContext {
		let localctx: TagTypeContext = new TagTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, YarnovaParser.RULE_tagType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			this.match(YarnovaParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stylingDeclaration(): StylingDeclarationContext {
		let localctx: StylingDeclarationContext = new StylingDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, YarnovaParser.RULE_stylingDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 228;
			this.match(YarnovaParser.T__23);
			this.state = 229;
			this.stylingProperty();
			this.state = 230;
			this.match(YarnovaParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stylingProperty(): StylingPropertyContext {
		let localctx: StylingPropertyContext = new StylingPropertyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, YarnovaParser.RULE_stylingProperty);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			this.match(YarnovaParser.Identifier);
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 233;
				this.match(YarnovaParser.T__24);
				this.state = 234;
				this.match(YarnovaParser.Identifier);
				}
			}

			this.state = 237;
			this.match(YarnovaParser.T__3);
			this.state = 238;
			this.match(YarnovaParser.Identifier);
			this.state = 243;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 239;
					this.match(YarnovaParser.T__25);
					this.state = 240;
					this.stylingProperty();
					}
					}
				}
				this.state = 245;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logDeclaration(): LogDeclarationContext {
		let localctx: LogDeclarationContext = new LogDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, YarnovaParser.RULE_logDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this.match(YarnovaParser.T__26);
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 247;
				this.match(YarnovaParser.Literal);
				}
				break;
			case 2:
				{
				this.state = 248;
				this.match(YarnovaParser.Identifier);
				}
				break;
			case 3:
				{
				this.state = 249;
				this.functionCall();
				}
				break;
			}
			this.state = 252;
			this.match(YarnovaParser.T__2);
			this.state = 254;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 253;
				this.closure();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, YarnovaParser.RULE_expression);
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 256;
				this.match(YarnovaParser.Literal);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 257;
				this.match(YarnovaParser.T__15);
				this.state = 258;
				this.expression();
				this.state = 259;
				this.match(YarnovaParser.T__2);
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 261;
				this.match(YarnovaParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public closure(): ClosureContext {
		let localctx: ClosureContext = new ClosureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, YarnovaParser.RULE_closure);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 264;
			this.match(YarnovaParser.T__25);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,33,267,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,
	0,12,0,51,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,60,8,1,1,2,1,2,1,2,1,2,3,
	2,66,8,2,1,2,1,2,1,2,3,2,71,8,2,1,2,1,2,1,2,3,2,76,8,2,1,3,1,3,1,3,1,3,
	3,3,82,8,3,1,4,1,4,1,4,1,4,3,4,88,8,4,1,4,1,4,3,4,92,8,4,1,4,3,4,95,8,4,
	1,5,1,5,1,5,1,5,3,5,101,8,5,1,5,1,5,1,5,1,5,1,5,5,5,108,8,5,10,5,12,5,111,
	9,5,1,5,1,5,3,5,115,8,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,3,8,125,8,8,1,8,
	1,8,1,8,3,8,130,8,8,1,8,1,8,1,9,1,9,1,9,5,9,137,8,9,10,9,12,9,140,9,9,1,
	9,1,9,1,9,1,9,3,9,146,8,9,1,9,1,9,3,9,150,8,9,1,10,1,10,1,10,5,10,155,8,
	10,10,10,12,10,158,9,10,1,11,1,11,1,11,5,11,163,8,11,10,11,12,11,166,9,
	11,1,12,1,12,1,12,3,12,171,8,12,1,13,1,13,5,13,175,8,13,10,13,12,13,178,
	9,13,1,13,3,13,181,8,13,3,13,183,8,13,1,13,1,13,1,14,1,14,3,14,189,8,14,
	1,15,1,15,1,15,5,15,194,8,15,10,15,12,15,197,9,15,1,15,3,15,200,8,15,1,
	16,1,16,1,16,3,16,205,8,16,1,16,1,16,3,16,209,8,16,1,16,1,16,3,16,213,8,
	16,1,16,5,16,216,8,16,10,16,12,16,219,9,16,3,16,221,8,16,1,16,1,16,1,16,
	1,16,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,3,19,236,8,19,1,19,1,
	19,1,19,1,19,5,19,242,8,19,10,19,12,19,245,9,19,1,20,1,20,1,20,1,20,3,20,
	251,8,20,1,20,1,20,3,20,255,8,20,1,21,1,21,1,21,1,21,1,21,1,21,3,21,263,
	8,21,1,22,1,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
	34,36,38,40,42,44,0,1,1,0,12,14,291,0,49,1,0,0,0,2,59,1,0,0,0,4,61,1,0,
	0,0,6,81,1,0,0,0,8,83,1,0,0,0,10,96,1,0,0,0,12,116,1,0,0,0,14,118,1,0,0,
	0,16,120,1,0,0,0,18,133,1,0,0,0,20,151,1,0,0,0,22,159,1,0,0,0,24,167,1,
	0,0,0,26,172,1,0,0,0,28,188,1,0,0,0,30,190,1,0,0,0,32,201,1,0,0,0,34,226,
	1,0,0,0,36,228,1,0,0,0,38,232,1,0,0,0,40,246,1,0,0,0,42,262,1,0,0,0,44,
	264,1,0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,
	50,1,0,0,0,50,1,1,0,0,0,51,49,1,0,0,0,52,60,3,8,4,0,53,60,3,16,8,0,54,60,
	3,32,16,0,55,60,3,40,20,0,56,60,3,18,9,0,57,60,3,4,2,0,58,60,3,10,5,0,59,
	52,1,0,0,0,59,53,1,0,0,0,59,54,1,0,0,0,59,55,1,0,0,0,59,56,1,0,0,0,59,57,
	1,0,0,0,59,58,1,0,0,0,60,3,1,0,0,0,61,62,5,1,0,0,62,63,5,28,0,0,63,65,5,
	2,0,0,64,66,3,22,11,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,70,5,
	3,0,0,68,69,5,4,0,0,69,71,3,12,6,0,70,68,1,0,0,0,70,71,1,0,0,0,71,72,1,
	0,0,0,72,73,5,5,0,0,73,75,3,6,3,0,74,76,3,44,22,0,75,74,1,0,0,0,75,76,1,
	0,0,0,76,5,1,0,0,0,77,82,3,42,21,0,78,82,3,26,13,0,79,82,3,18,9,0,80,82,
	3,40,20,0,81,77,1,0,0,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,0,0,82,7,
	1,0,0,0,83,84,5,6,0,0,84,87,5,28,0,0,85,86,5,4,0,0,86,88,3,12,6,0,87,85,
	1,0,0,0,87,88,1,0,0,0,88,91,1,0,0,0,89,90,5,7,0,0,90,92,3,14,7,0,91,89,
	1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,93,95,3,44,22,0,94,93,1,0,0,0,94,95,
	1,0,0,0,95,9,1,0,0,0,96,97,5,8,0,0,97,100,5,28,0,0,98,99,5,4,0,0,99,101,
	3,12,6,0,100,98,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,103,5,7,0,0,
	103,104,5,9,0,0,104,109,3,42,21,0,105,106,5,10,0,0,106,108,3,42,21,0,107,
	105,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,112,1,0,
	0,0,111,109,1,0,0,0,112,114,5,11,0,0,113,115,3,44,22,0,114,113,1,0,0,0,
	114,115,1,0,0,0,115,11,1,0,0,0,116,117,7,0,0,0,117,13,1,0,0,0,118,119,3,
	42,21,0,119,15,1,0,0,0,120,121,5,15,0,0,121,122,5,28,0,0,122,124,5,16,0,
	0,123,125,3,22,11,0,124,123,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,
	129,5,3,0,0,127,128,5,4,0,0,128,130,3,12,6,0,129,127,1,0,0,0,129,130,1,
	0,0,0,130,131,1,0,0,0,131,132,3,26,13,0,132,17,1,0,0,0,133,138,5,28,0,0,
	134,135,5,17,0,0,135,137,5,28,0,0,136,134,1,0,0,0,137,140,1,0,0,0,138,136,
	1,0,0,0,138,139,1,0,0,0,139,141,1,0,0,0,140,138,1,0,0,0,141,145,5,16,0,
	0,142,146,3,20,10,0,143,146,3,42,21,0,144,146,3,18,9,0,145,142,1,0,0,0,
	145,143,1,0,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,149,
	5,3,0,0,148,150,3,44,22,0,149,148,1,0,0,0,149,150,1,0,0,0,150,19,1,0,0,
	0,151,156,3,42,21,0,152,153,5,10,0,0,153,155,3,42,21,0,154,152,1,0,0,0,
	155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,21,1,0,0,0,158,156,
	1,0,0,0,159,164,3,24,12,0,160,161,5,10,0,0,161,163,3,24,12,0,162,160,1,
	0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,23,1,0,0,0,166,
	164,1,0,0,0,167,170,5,28,0,0,168,169,5,4,0,0,169,171,3,12,6,0,170,168,1,
	0,0,0,170,171,1,0,0,0,171,25,1,0,0,0,172,182,5,18,0,0,173,175,3,28,14,0,
	174,173,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,183,
	1,0,0,0,178,176,1,0,0,0,179,181,3,30,15,0,180,179,1,0,0,0,180,181,1,0,0,
	0,181,183,1,0,0,0,182,176,1,0,0,0,182,180,1,0,0,0,183,184,1,0,0,0,184,185,
	5,19,0,0,185,27,1,0,0,0,186,189,3,8,4,0,187,189,3,40,20,0,188,186,1,0,0,
	0,188,187,1,0,0,0,189,29,1,0,0,0,190,195,5,20,0,0,191,194,3,42,21,0,192,
	194,3,32,16,0,193,191,1,0,0,0,193,192,1,0,0,0,194,197,1,0,0,0,195,193,1,
	0,0,0,195,196,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,198,200,3,44,22,0,
	199,198,1,0,0,0,199,200,1,0,0,0,200,31,1,0,0,0,201,202,5,21,0,0,202,204,
	3,34,17,0,203,205,3,36,18,0,204,203,1,0,0,0,204,205,1,0,0,0,205,206,1,0,
	0,0,206,208,5,22,0,0,207,209,5,28,0,0,208,207,1,0,0,0,208,209,1,0,0,0,209,
	220,1,0,0,0,210,212,3,32,16,0,211,213,5,28,0,0,212,211,1,0,0,0,212,213,
	1,0,0,0,213,217,1,0,0,0,214,216,3,32,16,0,215,214,1,0,0,0,216,219,1,0,0,
	0,217,215,1,0,0,0,217,218,1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,220,210,
	1,0,0,0,220,221,1,0,0,0,221,222,1,0,0,0,222,223,5,23,0,0,223,224,3,34,17,
	0,224,225,5,22,0,0,225,33,1,0,0,0,226,227,5,28,0,0,227,35,1,0,0,0,228,229,
	5,24,0,0,229,230,3,38,19,0,230,231,5,19,0,0,231,37,1,0,0,0,232,235,5,28,
	0,0,233,234,5,25,0,0,234,236,5,28,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,
	237,1,0,0,0,237,238,5,4,0,0,238,243,5,28,0,0,239,240,5,26,0,0,240,242,3,
	38,19,0,241,239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,
	244,39,1,0,0,0,245,243,1,0,0,0,246,250,5,27,0,0,247,251,5,29,0,0,248,251,
	5,28,0,0,249,251,3,18,9,0,250,247,1,0,0,0,250,248,1,0,0,0,250,249,1,0,0,
	0,251,252,1,0,0,0,252,254,5,3,0,0,253,255,3,44,22,0,254,253,1,0,0,0,254,
	255,1,0,0,0,255,41,1,0,0,0,256,263,5,29,0,0,257,258,5,16,0,0,258,259,3,
	42,21,0,259,260,5,3,0,0,260,263,1,0,0,0,261,263,5,28,0,0,262,256,1,0,0,
	0,262,257,1,0,0,0,262,261,1,0,0,0,263,43,1,0,0,0,264,265,5,26,0,0,265,45,
	1,0,0,0,37,49,59,65,70,75,81,87,91,94,100,109,114,124,129,138,145,149,156,
	164,170,176,180,182,188,193,195,199,204,208,212,217,220,235,243,250,254,
	262];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YarnovaParser.__ATN) {
			YarnovaParser.__ATN = new ATNDeserializer().deserialize(YarnovaParser._serializedATN);
		}

		return YarnovaParser.__ATN;
	}


	static DecisionsToDFA = YarnovaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_program;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public jsxDeclaration(): JsxDeclarationContext {
		return this.getTypedRuleContext(JsxDeclarationContext, 0) as JsxDeclarationContext;
	}
	public logDeclaration(): LogDeclarationContext {
		return this.getTypedRuleContext(LogDeclarationContext, 0) as LogDeclarationContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public lambdaDeclaration(): LambdaDeclarationContext {
		return this.getTypedRuleContext(LambdaDeclarationContext, 0) as LambdaDeclarationContext;
	}
	public arrayDeclaration(): ArrayDeclarationContext {
		return this.getTypedRuleContext(ArrayDeclarationContext, 0) as ArrayDeclarationContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_statement;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaDeclarationContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, 0);
	}
	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public closure(): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, 0) as ClosureContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_lambdaDeclaration;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitLambdaDeclaration) {
			return visitor.visitLambdaDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public logDeclaration(): LogDeclarationContext {
		return this.getTypedRuleContext(LogDeclarationContext, 0) as LogDeclarationContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_lambdaExpression;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public initialValue(): InitialValueContext {
		return this.getTypedRuleContext(InitialValueContext, 0) as InitialValueContext;
	}
	public closure(): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, 0) as ClosureContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_variableDeclaration;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclarationContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
	public closure(): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, 0) as ClosureContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_arrayDeclaration;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitArrayDeclaration) {
			return visitor.visitArrayDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAnnotationContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_typeAnnotation;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitTypeAnnotation) {
			return visitor.visitTypeAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitialValueContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_initialValue;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitInitialValue) {
			return visitor.visitInitialValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_functionDeclaration;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(YarnovaParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, i);
	}
	public functionCallParamList(): FunctionCallParamListContext {
		return this.getTypedRuleContext(FunctionCallParamListContext, 0) as FunctionCallParamListContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public closure(): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, 0) as ClosureContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_functionCall;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallParamListContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_functionCallParamList;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitFunctionCallParamList) {
			return visitor.visitFunctionCallParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_parameterList;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, 0);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getTypedRuleContext(TypeAnnotationContext, 0) as TypeAnnotationContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_parameter;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockStatement_list(): BlockStatementContext[] {
		return this.getTypedRuleContexts(BlockStatementContext) as BlockStatementContext[];
	}
	public blockStatement(i: number): BlockStatementContext {
		return this.getTypedRuleContext(BlockStatementContext, i) as BlockStatementContext;
	}
	public returnExpression(): ReturnExpressionContext {
		return this.getTypedRuleContext(ReturnExpressionContext, 0) as ReturnExpressionContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_block;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public logDeclaration(): LogDeclarationContext {
		return this.getTypedRuleContext(LogDeclarationContext, 0) as LogDeclarationContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_blockStatement;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnExpressionContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public jsxDeclaration_list(): JsxDeclarationContext[] {
		return this.getTypedRuleContexts(JsxDeclarationContext) as JsxDeclarationContext[];
	}
	public jsxDeclaration(i: number): JsxDeclarationContext {
		return this.getTypedRuleContext(JsxDeclarationContext, i) as JsxDeclarationContext;
	}
	public closure(): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, 0) as ClosureContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_returnExpression;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitReturnExpression) {
			return visitor.visitReturnExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxDeclarationContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tagType_list(): TagTypeContext[] {
		return this.getTypedRuleContexts(TagTypeContext) as TagTypeContext[];
	}
	public tagType(i: number): TagTypeContext {
		return this.getTypedRuleContext(TagTypeContext, i) as TagTypeContext;
	}
	public stylingDeclaration(): StylingDeclarationContext {
		return this.getTypedRuleContext(StylingDeclarationContext, 0) as StylingDeclarationContext;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(YarnovaParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, i);
	}
	public jsxDeclaration_list(): JsxDeclarationContext[] {
		return this.getTypedRuleContexts(JsxDeclarationContext) as JsxDeclarationContext[];
	}
	public jsxDeclaration(i: number): JsxDeclarationContext {
		return this.getTypedRuleContext(JsxDeclarationContext, i) as JsxDeclarationContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_jsxDeclaration;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitJsxDeclaration) {
			return visitor.visitJsxDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagTypeContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_tagType;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitTagType) {
			return visitor.visitTagType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StylingDeclarationContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stylingProperty(): StylingPropertyContext {
		return this.getTypedRuleContext(StylingPropertyContext, 0) as StylingPropertyContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_stylingDeclaration;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitStylingDeclaration) {
			return visitor.visitStylingDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StylingPropertyContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(YarnovaParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, i);
	}
	public stylingProperty_list(): StylingPropertyContext[] {
		return this.getTypedRuleContexts(StylingPropertyContext) as StylingPropertyContext[];
	}
	public stylingProperty(i: number): StylingPropertyContext {
		return this.getTypedRuleContext(StylingPropertyContext, i) as StylingPropertyContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_stylingProperty;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitStylingProperty) {
			return visitor.visitStylingProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogDeclarationContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Literal(): TerminalNode {
		return this.getToken(YarnovaParser.Literal, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, 0);
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public closure(): ClosureContext {
		return this.getTypedRuleContext(ClosureContext, 0) as ClosureContext;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_logDeclaration;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitLogDeclaration) {
			return visitor.visitLogDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Literal(): TerminalNode {
		return this.getToken(YarnovaParser.Literal, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(YarnovaParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_expression;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClosureContext extends ParserRuleContext {
	constructor(parser?: YarnovaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return YarnovaParser.RULE_closure;
	}
	// @Override
	public accept<Result>(visitor: YarnovaVisitor<Result>): Result {
		if (visitor.visitClosure) {
			return visitor.visitClosure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
