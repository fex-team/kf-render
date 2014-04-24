/**
 * 上下标操作符
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' );

    return kity.createClass( 'ScriptOperator', {

        base: require( "operator/operator" ),

        constructor: function ( operatorName ) {

            this.callBase( operatorName || "Script" );

        },

        applyOperand: function ( operand, sup, sub ) {

            sup.setAnchor( 0, 0 ).scale( 0.66 );
            sub.setAnchor( 0, 0 ).scale( 0.66);

            var operandBox = operand.getRenderBox();

            // 默认字符高度
            operandBox.height = operandBox.height || 50;

            // 基础空间大小
            var supBox = sup.getRenderBox(),
                subBox = sub.getRenderBox(),
                maxOffset = Math.max( supBox.height, subBox.height ),
                vOffset = maxOffset - operandBox.height / 2,
                space = {
                    width: operandBox.width + Math.max( supBox.width, subBox.width ),
                    height: 0
                };

            // 水平方向调整
            sup.translate( operandBox.width, 0 );
            sub.translate( operandBox.width, 0 );

            if ( vOffset > 0 ) {

                operand.translate( 0, vOffset );

                // 上标偏移
                if ( supBox.height <= operandBox.height / 2 ) {
                    sup.translate( 0, vOffset );
                } else {
                    sup.translate( 0, vOffset - ( supBox.height - operandBox.height / 2 ) );
                }

                // 下标偏移
                if ( subBox.height <= operandBox.height / 2 ) {
                    sub.translate( 0, vOffset + operandBox.height - subBox.height );
                } else {
                    sub.translate( 0, vOffset + operandBox.height / 2 );
                }

            } else if ( vOffset < 0 ) {
                sub.translate( 0, operandBox.height - subBox.height );
                vOffset = 0;
            }

            if ( vOffset === 0 ) {
                space.height = operandBox.height;
            } else {
                space.height = vOffset * 2 + operandBox.height;
            }

            this.parentExpression.setBoxSize( space.width, space.height );
            this.parentExpression.expand( 5, 5 );
            this.parentExpression.translateElement( 5, 5 );

        }

    } );

} );