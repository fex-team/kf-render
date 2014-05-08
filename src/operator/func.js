/**
 * 函数操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        Text = require( "char/text" ),
        ScriptController = require( "operator/common/script-controller" );

    return kity.createClass( 'FunctionOperator', {

        base: require( "operator/operator" ),

        constructor: function ( funcName ) {

            this.callBase( "Function: "+funcName );

            this.funcName = funcName;

        },

        /*
         * 积分操作符应用操作数
         * @param integrand 被积函数
         * @param supOperand 上限
         * @param subOperand 下限
         */
        applyOperand: function ( supOperand, subOperand ) {

            var opShape = generateOperator.call( this );

            this.addOperatorShape( opShape );

            adjustmentPosition.call( this, opShape, supOperand, subOperand );

        }

    } );

    /* 返回操作符对象 */
    function generateOperator () {

        return new Text( this.funcName, "KF AMS ROMAN" );

    }

    function adjustmentPosition ( operatorShape, sup, sub ) {

        new ScriptController( this, operatorShape, sup, sub, {
            expand: {
                width: 10,
                height: 0
            },
            allOffset: {
                x: 5,
                y: 0
            }
        } ).applyUpDown();

    }

} );
