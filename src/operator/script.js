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
                parent = this.parentExpression,
                space = new ScriptController( this, operand, sup, sub ).applySide();

            space && parent.setOffset( space.top, space.bottom );
//            this.parentExpression.setBoxSize( space.width, space.height );
            parent.expand( 4, padding * 2 );
            parent.translateElement( 2, padding );

        }

    } );

} );