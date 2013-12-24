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
                boxShape = generateBox( width, height ),
                operatorShape = generateOperator( width );

            this.addOperatorShape( boxShape );
            this.addOperatorShape( operatorShape );

            upOperand.translate( ( width - upWidth ) / 2, height - upHeight );
            operatorShape.translate( 0, height );
            downOperand.translate( ( width - downWidth ) / 2, height + 3 );

        }

    } );


    function generateOperator ( width ) {

        return new kity.Rect( 0, 0, width, 3 ).fill( "black" );

    }

    function generateBox ( width, height ) {

        return new kity.Rect( 0, 0, width, height * 2 + 3 ).fill( "transparent" );

    }

} );