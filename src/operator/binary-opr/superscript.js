/**
 * 上标操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SuperscriptOperator', {

        base: require( "operator/binary" ),

        constructor: function () {

            this.callBase( "Superscript" );
            this.setBoxSize( 0, 0 );

        },

        applyOperand: function ( operand, superscript ) {

            var operandBox = operand.getRenderBox();

            superscript.setAnchor( 0, 0 );
            superscript.scale( 0.5 );
            superscript.translate( operandBox.x + operandBox.width, 0 );

        }

    } );

} );
