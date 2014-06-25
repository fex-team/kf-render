/**
 * 组合操作符
 * 操作多个表达式组合在一起
 */

define( function ( require ) {

    var kity = require( "kity" );

    return kity.createClass( 'CombinationOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( 'Combination' );

        },

        applyOperand: function () {

                // 偏移量
            var offsetX = 0,
                // 操作数
                operands = arguments,
                // 操作对象最大高度
                maxHeight = 0,
                // 垂直距离最大偏移
                maxOffsetTop = 0,
                maxOffsetBottom = 0,
                cached = [],
                // 偏移集合
                offsets = [];

            kity.Utils.each( operands, function ( operand ) {

                var box = operand.getFixRenderBox(),
                    offsetY = operand.getOffset();

                box.height -= offsetY.top + offsetY.bottom;
                cached.push( box );
                offsets.push( offsetY );
                maxOffsetTop = Math.max( offsetY.top, maxOffsetTop );
                maxOffsetBottom = Math.max( offsetY.bottom, maxOffsetBottom );
                maxHeight = Math.max( box.height, maxHeight );

            } );

            kity.Utils.each( operands, function ( operand, index ) {

                var box = cached[ index ];

                operand.translate( offsetX - box.x, ( maxHeight - ( box.y + box.height ) ) / 2 + maxOffsetBottom - offsets[ index ].bottom );

                offsetX += box.width;

            } );

            this.parentExpression.setOffset( maxOffsetTop, maxOffsetBottom );
            this.parentExpression.updateBoxSize();

        }

    } );

} );