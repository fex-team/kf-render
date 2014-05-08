/**
 * 函数表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
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

            this.setOperator( new FunctionOperator( funcName ) );

            this.setExpr( expr );
            this.setSuperscript( sup );
            this.setSubscript( sub );

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
