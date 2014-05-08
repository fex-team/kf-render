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

            upOperand.scale( 0.66 );
            downOperand.scale( 0.66 );

            var upWidth = Math.ceil( upOperand.getWidth() ),
                downWidth = Math.ceil( downOperand.getWidth() ),
                upHeight = Math.ceil( upOperand.getHeight() ),
                downHeight = Math.ceil( downOperand.getHeight() ),
                offset = 3,
                // 整体padding
                boxPadding = 5,
                maxWidth = Math.max( upWidth, downWidth ),
                // 内部padding
                padding = 3,
                maxHeight = Math.max( upHeight, downHeight ),
                operatorShape = generateOperator( maxWidth, offset );

            this.addOperatorShape( operatorShape );
            upOperand.translate( ( maxWidth - upWidth ) / 2 + offset, maxHeight - upHeight );
            operatorShape.translate( 0, maxHeight + padding );
            // 下部不需要偏移
            downOperand.translate( ( maxWidth - downWidth ) / 2 + offset, maxHeight + padding + operatorShape.getHeight() );

            this.parentExpression.setBoxSize( maxWidth + offset * 2, maxHeight * 2 + operatorShape.getHeight() + padding * 2 );

            this.parentExpression.expand( boxPadding, boxPadding );
            this.parentExpression.translateElement( boxPadding, boxPadding );

        }

    } );


    function generateOperator ( width, offset ) {

        return new kity.Rect( width + offset * 2, 1 ).fill( "black" );

    }


} );