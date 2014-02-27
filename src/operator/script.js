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

            var operandBox = operand.getRenderBox(),
                supBox = sup.getRenderBox(),
                subBox = sub.getRenderBox(),
                maxScriptHeight = Math.max( supBox.height, subBox.height ) / 3,
                maxScriptWidth = Math.max( supBox.width, subBox.width ),
                // Y轴偏移
                offset = 0,
                // 上下标和操作数之间的横向间距
                SPACE = 1,
                boxSize = {
                    w: operandBox.width + SPACE + maxScriptWidth,
                    h: maxScriptHeight * 2 + operandBox.height
                }

            this.setBoxSize( boxSize.w, boxSize.h );

            offset = maxScriptHeight - supBox.height / 3;
            sup.translate( operandBox.width + SPACE, offset );

            offset = maxScriptHeight;
            operand.translate( 0, offset );

            offset += operandBox.height - maxScriptHeight * 2;
            sub.translate( operandBox.width + SPACE, offset );

        }

    } );

} );