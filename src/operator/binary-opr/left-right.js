/**
 * 左右结合二元操作符
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'LeftRightOperator', {

        base: require( "operator/binary" ),

        applyOperand: function ( leftOperand, rightOperand ) {

            var operator = this,
                operatorBox = operator.getFixRenderBox(),
                // 操作数特殊处理
                leftOperandBox = leftOperand.getFixRenderBox(),
                rightOperandBox = rightOperand.getFixRenderBox(),

                // 偏移量
                offset = 0,

                // 操作对象最大高度
                maxHeight = Math.max( leftOperandBox.height, rightOperandBox.height, operatorBox.height );

            // 左操作数
            leftOperand.translate( offset, ( maxHeight - leftOperandBox.height ) / 2 );

            // 操作符
            offset += leftOperandBox.width + leftOperandBox.x;
            operator.translate( offset, ( maxHeight - operatorBox.height ) / 2 );

            // 右操作数
            offset += operatorBox.width + operatorBox.x;
            rightOperand.translate( offset, ( maxHeight - rightOperandBox.height ) / 2 );

        }

    } );

} );
