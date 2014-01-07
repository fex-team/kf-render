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
                width = Math.max( upWidth, downWidth ),
                height = Math.max( upHeight, downHeight ),
                operatorShape = generateOperator( width );

            this.addOperatorShape( operatorShape );
            // 重置操作符的偏移， 使得该操作符回归到0,0的位置
            this.operatorShape.translate( -10, -10 );
            this.setBoxSize( 0, 0 );

            upOperand.translate( ( width - upWidth ) / 2, height - upHeight );
            operatorShape.translate( 0, height );
            downOperand.translate( ( width - downWidth ) / 2, height + 3 );

        }

    } );


    function generateOperator ( width ) {

        return new kity.Rect( 0, 0, width, 3 ).fill( "black" );

    }


} );