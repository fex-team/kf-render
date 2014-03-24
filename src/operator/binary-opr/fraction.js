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
            upOperand.translate( ( maxWidth - upWidth ) / 2, maxHeight - upHeight );
            operatorShape.translate( 0, maxHeight );
            downOperand.translate( ( maxWidth - downWidth ) / 2, maxHeight + operatorShape.getHeight() );

//            this.getParentExpression().setBoxSize( maxWidth, 2 * maxHeight + operatorShape.getHeight() );

        }

    } );


    function generateOperator ( width ) {

        return new kity.Rect( width, 1 ).fill( "black" );

    }


} );