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
         * @param sup 上标
         * @param sub 下标
         */
        constructor: function ( funcName, sup, sub ) {

            this.callBase();

            this.setFlag( "Func" );

            this.setOperator( new FunctionOperator( funcName ) );

            this.setSuperscript( sup );
            this.setSubscript( sub );

        },

        setSuperscript: function ( sub ) {
            return this.setOperand( sub, 0 );
        },

        getSuperscript: function () {
            return this.getOperand( 0 );
        },

        setSubscript: function ( sub ) {
            return this.setOperand( sub, 1 );
        },

        getSubscript: function () {
            return this.getOperand( 1 );
        }

    } );

} );
