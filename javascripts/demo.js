/**
 * demo页公式脚本
 */

window.onload = function () {

    // 公式列表
    var expressions = [

        {
            title: "文本表达式",
            exp: new kf.TextExpression( "xyz" )
        }, {
            title: "加法表达式",
            exp: new kf.AdditionExpression( "a", "b" )
        }, {
            title: "减法表达式",
            exp: new kf.SubtractionExpression( "a", "b" )
        }, {
            title: "乘法表达式",
            exp: new kf.MultiplicationExpression( "a", "b" )
        }, {
            title: "除法表达式",
            exp: new kf.DivisionExpression( "a", "b" )
        }, {
            title: "点乘表达式",
            exp: new kf.DotExpression( "a", "b" )
        }, {
            title: "星号乘法表达式",
            exp: new kf.AsteriskExpression( "a", "b" )
        }, {
            title: "等号表达式",
            exp: new kf.EqualExpression( "a", "b" )
        }, {
            title: "分数表达式",
            exp: new kf.FractionExpression( "b", "a" )
        }, {
            title: "逻辑与表达式",
            exp: new kf.LogicalConjunctionExpression( "a", "b" )
        }, {
            title: "逻辑或表达式",
            exp: new kf.LogicalDisjunctionExpression( "a", "b" )
        }, {
            title: "正负号表达式",
            exp: new kf.PlusMinusExpression( "a", "b" )
        }, {
            title: "负正号表达式",
            exp: new kf.MinusPlusExpression( "a", "b" )
        }, {
            title: "方根表达式",
            exp: new kf.RadicalExpression( "a", "b" )
        }, {
            title: "上标表达式",
            exp: new kf.SuperscriptExpression( "a", "b" )
        }, {
            title: "下标表达式",
            exp: new kf.SubscriptExpression( "a", "b" )
        }, {
            title: "积分表达式",
            exp: new kf.IntegrationExpression( "f(x)dx", "b", "a" )
        }

    ];

    // init start
    ( function () {

        initCharset();
        initSymbol();
        initGreekCharset();
        initTableBox();
        createFormulas();
        createComplexFormula();

    } )();

    /*
     * 初始化基本字符集
     */
    function initCharset () {

        var formula = new kf.Formula( "baseCharset" ),
            textExp1 = new kf.TextExpression( "abcdefghijklmnopqrstuvwxyz" ),
            textExp2 = new kf.TextExpression( "ABCDEFGHIJKLMNOPQRSTUVWXYZ" );

        formula.appendExpression( textExp1 );
        formula.appendExpression( textExp2 );

    }

    /*
     * 初始化可打印符号
     */
    function initSymbol () {

        var formula = new kf.Formula( "symbol" ),
            textExp = new kf.TextExpression( "+-/|()![]:'<>." );

        formula.appendExpression( textExp );

    }

    /*
     * 初始化希腊语字符集
     */
    function initGreekCharset () {

        var formula = new kf.Formula( "greek" ),
            chars = [ "alpha", "beta", "gamma",
                      "delta", "epsilon", "zeta",
                      "eta", "theta", "iota",
                      "kappa", "lambda", "mu",
                      "nu", "xi", "omicron",
                      "pi", "rho", "sigma",
                      "tau", "upsilon", "phi",
                      "chi", "psi", "omega" ],
            textExp = new kf.TextExpression( "\\" + chars.join( "\\\\" ) + "\\" );

        for ( var i = 0, len = chars.length; i < len; i++ ) {

            chars[ i ] = chars[ i ].replace( /^\w/, function ( match ) {
                return match.toUpperCase();
            } );

        }

        formula.appendExpression( textExp );
        formula.appendExpression( new kf.TextExpression( "\\" + chars.join( "\\\\" ) + "\\" ) );

    }

    /*
     * 创建公式表格容器
     */
    function initTableBox () {

        var tables = [];

        for ( var i = 0, len = expressions.length; i < len; i+=2 ) {

            tables.push( '<tr><td class="title-cell"><div id="boxTitle'+ i +'"></div></td><td><div id="box'+ i +'"></div></td>' );
            tables.push( '<td class="title-cell"><div id="boxTitle'+ (i+1) +'"></div></td><td><div id="box'+ (i+1) +'"></div></td></tr>' );

        }

        document.getElementById("container").innerHTML = '<table><tbody>'+ tables.join( "" ) +'</tbody></table>'

    }

    /*
     * 创建公式
     */
    function createFormulas () {

        var currentExp = null;

        for ( var i = 0, len = expressions.length; i < len; i++ ) {

            currentExp = expressions[ i ];

            document.getElementById( "boxTitle" + i ).innerHTML = currentExp.title;

            new kf.Formula( "box" + i ).appendExpression( currentExp.exp );

        }

    }

    /*
     * 创建复杂公式示例
     */
    function createComplexFormula () {

        var formula = new kf.Formula( "complex"),
            exps = [{
                title: "质能方程",
                exp: function () {
                    var exp = new kf.SuperscriptExpression( "mc", "2");
                    return new kf.EqualExpression( new kf.SubscriptExpression( "E", "0" ), exp );
                }
            }, {
                title: "圆周长",
                exp: new kf.EqualExpression( "c", "2\\pi\\r" )
            }, {
                title: "勾股定理",
                exp: function () {

                    var exp1 = new kf.AdditionExpression( new kf.SuperscriptExpression( "a", 2 ), new kf.SuperscriptExpression( "b", "2" ) );
                    return new kf.EqualExpression( exp1, new kf.SuperscriptExpression( "c", 2 ) );

                }
            }, {
                title: "欧拉公式",
                exp: function () {

                    var exp1 = new kf.SuperscriptExpression( "e", "i\\pi\\" );
                    exp1 = new kf.AdditionExpression( exp1, 1 );

                    return new kf.EqualExpression( exp1, 0 );

                }

            }, {
                title: "乘积的方根",
                exp: function () {

                    var exp1 = new kf.RadicalExpression( "ab", "n" );
                    exp1 = new kf.EqualExpression( exp1, new kf.RadicalExpression( "a", "n" ) );

                    return new kf.DotExpression( exp1, new kf.RadicalExpression( "b", "n" ) );

                }
            }, {
                title: "转动惯量",
                exp: function () {

                    var exp = new kf.SuperscriptExpression( "\\rho\\r", "2" ),
                        exp = new kf.CombinationExpression( exp, "dV" ),
                        integrationExp = new kf.IntegrationExpression( exp, null, "V" );

                    integrationExp.setType( kf.IntegrationExpression.TYPE_TRIPLE );

                    return new kf.EqualExpression( new kf.SubscriptExpression( "I", "z" ), integrationExp );

                }
            } ],
            tables = [];

        // 创建table容器
        for ( var i = 0 , len = exps.length; i < len; i++ ) {

            tables.push( '<tr><td class="title-cell">'+ exps[ i ].title +'</td><td><div id="cExp'+ i +'"></div></td></tr>' );

        }

        document.getElementById( "complex" ).innerHTML = "<table><tbody>"+ tables.join( "" ) +"</tbody></table>";

        // 创建公式
        for ( var i = 0, len = exps.length; i < len; i++ ) {

            var exp = exps[ i ].exp,
                formula = new kf.Formula( "cExp" + i );

            if ( typeof exp === 'function' ) {
                exp = exp.call( null );
            }

            formula.appendExpression( exp );

        }

    }

};