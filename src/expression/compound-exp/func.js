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
         * @param funcExp function表达式
         * @param sup 上标
         * @param sub 下标
         */
        constructor: function ( funcName, funcExp, sup, sub ) {

            this.callBase();

            this.setOperator( new FunctionOperator( funcName ) );

            this.setFuncExp( funcExp );
            this.setSuperscript( sup );
            this.setSubscript( sub );

        },

        setFuncExp: function ( funcExp ) {
            return this.setOperand( funcExp, 0 );
        },

        getFuncExp: function () {
            return this.getOperand( 0 );
        },

        setSuperscript: function ( sub ) {
            return this.setOperand( sub, 1 );
        },

        getSuperscript: function () {
            return this.getOperand( 1 );
        },

        setSubscript: function ( sub ) {
            return this.setOperand( sub, 2 );
        },

        getSubscript: function () {
            return this.getOperand( 2 );
        }

    } );

} );
