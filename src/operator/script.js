/**
 * 上下标操作符
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' ),
        ScriptController = require( "operator/common/script-controller" );

    return kity.createClass( 'ScriptOperator', {

        base: require( "operator/operator" ),

        constructor: function ( operatorName ) {

            this.callBase( operatorName || "Script" );

        },

        applyOperand: function ( operand, sup, sub ) {

            new ScriptController( this, operand, sup, sub, {
                expand: {
                    width: 0,
                    height: 10
                },
                allOffset: {
                    x: 0,
                    y: 5
                }
            } ).applySide();

        }

    } );

} );