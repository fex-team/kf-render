/**
 * 分数操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'FractionOperator', {

        base: require( "operator/binary-opr/up-down" ),

        constructor: function () {

            this.callBase( "Fraction" );

        },

        applyOperand: function ( upOperand, downOperand ) {

            var upWidth = upOperand.getWidth(),
                downWidth = downOperand.getWidth(),
                upHeight = upOperand.getHeight(),
                downHeight = downOperand.getHeight(),
                maxWidth = Math.max( upWidth, downWidth ),
                maxHeight = Math.max( upHeight, downHeight ),
                operatorShape = generateOperator( maxWidth );

            this.addOperatorShape( operatorShape );
            // 重置操作符的偏移， 使得该操作符回归到0,0的位置
            this.setBoxSize( 0, 0 );

            upOperand.translate( ( maxWidth - upWidth ) / 2, maxHeight - upHeight );
            operatorShape.translate( 0, maxHeight );
            downOperand.translate( ( maxWidth - downWidth ) / 2, maxHeight + operatorShape.getHeight() + ( maxHeight - downHeight ) / 2 );

        }

    } );


    function generateOperator ( width ) {

        return new kity.Rect( 0, 0, width, 1 ).fill( "black" );

    }


} );