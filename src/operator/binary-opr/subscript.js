/**
 * 下标操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SubscriptOperator', {

        base: require( "operator/binary" ),

        constructor: function () {

            this.callBase( "Subscript" );
            this.setBoxSize( 0, 0 );

        },

        applyOperand: function ( operand, subscript ) {

            var operandBox = operand.getRenderBox(),
                subBox = subscript.getRenderBox();

            subscript.setAnchor( 0, subBox.y + subBox.height );
            subscript.scale( 0.5 );
            subscript.translate( operandBox.x + operandBox.width + 2, 0 );

        }

    } );

} );
