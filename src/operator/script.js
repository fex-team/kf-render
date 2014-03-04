/**
 * 上下标操作符
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' );

    return kity.createClass( 'SubtractionOperator', {

        base: require( "operator/operator" ),

        constructor: function ( operatorName ) {

            this.callBase( operatorName || "Script" );

        },

        applyOperand: function ( operand, sup, sub ) {

            sub.setAnchor( 0, 0 ).scale( 0.7 );
            sup.setAnchor( 0, 0 ).scale( 0.7 );

            // 基础空间大小
            var operandBox = {
                    width: operand.getWidth(),
                    height: operand.getBaseHeight()
                },
                supBox = {
                    width: sup.getWidth() || sub.getWidth(),
                    height: sup.getBaseHeight() || sub.getBaseHeight()
                },
                subBox = {
                    width: sub.getWidth() || supBox.width,
                    height: sub.getBaseHeight() || supBox.height
                },
                // 占用空间大小
                operandSpaceSize = operand.getRenderBox(),
                supSpaceSize = {
                    width: sup.getWidth() || sub.getWidth(),
                    height: sup.getHeight() || sub.getHeight()
                },
                subSpaceSize = {
                    width: sub.getWidth() || supSpaceSize.width,
                    height: sub.getHeight() || supSpaceSize.height
                },

                // 基础空间到占用空间的偏移
                operandOffset = {
                    height: ( operandSpaceSize.height - operandBox.height ) / 2
                },
                supOffset = {
                    height: ( supSpaceSize.height - supBox.height ) / 2
                },
                subOffset = {
                    height: ( subSpaceSize.height - subBox.height ) / 2
                },
                offset = 0,
                boxSize = {
                    width: Math.max( supSpaceSize.width, subSpaceSize.width ) + 1 + operandSpaceSize.width,
                    height: Math.max( supSpaceSize.height, subSpaceSize.height ) * 2 + operandBox.height / 3
                },
                operandTranslate = supBox.height + supOffset.height - operandOffset.height - operandBox.height / 3,
                subTranslate = operandTranslate + operandSpaceSize.height - operandOffset.height - operandBox.height / 3;

            var diff = boxSize.height - ( subTranslate + subSpaceSize.height );

            if ( diff > 0 ) {
                // 扩展顶部空间
                offset += diff;
                operandTranslate += diff;
                subTranslate += diff;
            } else {
                // 扩展底部空间
                boxSize.height -= diff;
            }

            sup.translate( operandSpaceSize.width + 1, offset );

            operand.translate( 0, operandTranslate );

            sub.translate( operandSpaceSize.width + 1, subTranslate );

            this.setBoxSize( boxSize.width, boxSize.height );

        }

    } );

} );