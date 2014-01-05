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
                operatorBox = operator.getRenderBox(),
                // 操作数特殊处理
                leftOperandBox = kity.Utils.extend( leftOperand.getRenderBox(), {
                    height: leftOperand.getBaseHeight()
                } ),
                rightOperandBox = kity.Utils.extend( rightOperand.getRenderBox(), {
                    height: rightOperand.getBaseHeight()
                } ),

                // 偏移量
                offset = 0,

                // 操作对象最大高度
                maxHeight = Math.max( leftOperandBox.height, rightOperandBox.height, operatorBox.height );

            // 左操作数
            leftOperand.translate( offset, ( maxHeight - leftOperandBox.height ) / 2 );

            // 操作符
            offset += leftOperandBox.width + leftOperandBox.x + operatorBox.width/2;
            operator.translate( offset, ( maxHeight - operatorBox.height ) / 2 );

            // 右操作数
            offset += operatorBox.width * 3 / 2 + operatorBox.x;
            rightOperand.translate( offset, ( maxHeight - rightOperandBox.height ) / 2 );

        }

    } );

} );
