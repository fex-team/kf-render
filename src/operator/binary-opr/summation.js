/**
 * 求和操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity");

    return kity.createClass( 'SummationOperator', {

        base: require( "operator/binary-opr/up-down" ),

        constructor: function () {

            this.callBase( "Summation" );

        },

        applyOperand: function ( upOperand, downOperand ) {

            upOperand.setAnchor(0, 0).scale(0.5);
            downOperand.setAnchor(0, 0).scale(0.5);

            var upWidth = upOperand.getWidth(),
                upHeight = upOperand.getHeight(),
                downWidth = downOperand.getWidth(),
                downHeight = downOperand.getHeight(),
                operandWidth = Math.max( upWidth, downWidth ),
                operandHeight = Math.max( upHeight, downHeight),
                operatorShape = generateOperator();

            this.addOperatorShape( operatorShape );
            var operatorWidth = operatorShape.getWidth(),
                operatorHeight = operatorShape.getHeight();

            this.addOperatorShape( generateBox( operandWidth, operandHeight * 2 + operatorHeight ) );

            upOperand.translate( ( operandWidth - upWidth ) / 2, 0 );
            operatorShape.translate( ( operandWidth - operatorWidth ) / 2 , operandHeight );
            downOperand.translate( ( operandWidth - downWidth ) / 2 , operandHeight + operatorHeight );

        }

    } );


    function generateOperator () {

        var operator = new kity.Path( "M53.343,70.586c8.804,0.344,15.067-4.427,18.797-14.321h2.54l-4.573,21.994H0l39.118-38.362L0.509,0h68.582l6.097,17.903  l-2.54,0.51C66.884,7.849,59.948,2.733,51.82,3.069h-36.07l33.02,33.248L13.208,70.586H53.343z" ).fill( "black" ),
            operatorShape = new kity.Group();

        return operatorShape.addShape(operator);

    }

    function generateBox ( width, height ) {

        return new kity.Rect( 0, 0, width, height ).fill( "transparent" );

    }

} );
