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

            var opShape = this.getOperatorShape(),
                padding = 5,
                space = new ScriptController( this, operand, sup, sub ).applySide();

            this.parentExpression.setBoxSize( space.width, space.height );
            this.parentExpression.expand( 0, padding * 2 );
            this.parentExpression.translateElement( 0, padding );

        }

    } );

} );