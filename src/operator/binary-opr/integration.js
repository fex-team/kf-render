/**
 * 积分操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity");

    return kity.createClass( 'IntegrationOperator', {

        base: require( "operator/binary-opr/up-down" ),

        constructor: function () {

            this.callBase( "Integration" );

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
                operatorShape = generateOperator(),
                boxShape = generateBox( operandWidth + operandWidth, operandHeight);

            this.addOperatorShape( boxShape );
            this.addOperatorShape( operatorShape );

            var operatorWidth = operatorShape.getWidth(),
                operatorHeight = operatorShape.getHeight();

            upOperand.translate( operatorWidth, 0 );
            downOperand.translate( operatorWidth - operatorWidth / 2 , operatorHeight - downHeight );

        }

    } );


    function generateOperator () {

        var operator = new kity.Path( "M40.969,10.36c0.675-2.967,0-4.45-1.183-5.043c-3.042-1.484-7.434,4.599-8.701,12.758   c-0.929,5.637-2.28,19.435-3.632,37.385c-2.535,31.452-3.464,36.644-6.843,56.524c-4.055,23.143-12.249,26.407-18.078,19.879   c-4.309-5.193-3.041-18.396,3.295-15.578c2.196,0.891,3.463,7.863,1.267,10.831c-1.605,2.225-1.773,2.818-0.591,3.708   c4.562,2.967,8.701-6.824,10.306-22.402c1.858-17.802,3.379-34.715,4.477-48.363c1.69-19.88,2.619-27.891,6.167-41.984   c3.97-15.429,13.009-22.253,18.5-15.429c3.632,4.451,3.379,10.83,0.084,13.945C42.658,19.854,40.124,14.663,40.969,10.36z" ).fill( "black"),
            operatorBox = new kity.Path( "M48.593,165H0.005V0.001h48.588V165z" ).fill( "transparent" ),
            operatorShape = new kity.Group();

        operator.translate( 0, 16 );
        return operatorShape.addShape(operatorBox).addShape(operator);

    }

    function generateBox ( width, height ) {

        return new kity.Rect( 0, 0, width, height ).fill( "transparent" );

    }

} );
