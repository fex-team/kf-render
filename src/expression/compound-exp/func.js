/**
 * 函数表达式
 */

define( function ( require ) {

    var kity = require( "kity" ),
        FUNC_CONF = require( "sysconf" ).func,
        FunctionOperator = require( "operator/func" );

    return kity.createClass( 'FunctionExpression', {

        base: require( "expression/compound" ),

        /**
         * function表达式构造函数
         * @param funcName function名称
         * @param expr 函数表达式
         * @param sup 上标
         * @param sub 下标
         */
        constructor: function ( funcName, expr, sup, sub ) {

            this.callBase();

            this.setFlag( "Func" );
            this.funcName = funcName;

            this.setOperator( new FunctionOperator( funcName ) );

            this.setExpr( expr );
            this.setSuperscript( sup );
            this.setSubscript( sub );

        },

        // 当前函数应用的script位置是否是在侧面
        isSideScript: function () {
            return !FUNC_CONF[ 'ud-script' ][ this.funcName ];
        },

        setExpr: function ( expr ) {
            return this.setOperand( expr, 0 );
        },

        setSuperscript: function ( sub ) {
            return this.setOperand( sub, 1 );
        },

        setSubscript: function ( sub ) {
            return this.setOperand( sub, 2 );
        }

    } );

} );
