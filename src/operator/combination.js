/**
 * 组合操作符
 * 操作多个表达式组合在一起
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'CombinationOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( 'Combination' );

        },

        applyOperand: function () {

                // 偏移量
            var offset = 0,
                // 操作数
                operands = arguments,
                // 操作对象最大高度
                maxHeight = 0,
                cached = [];

            kity.Utils.each( operands, function ( operand ) {

                var box = operand.getFixRenderBox();

                cached.push( box );
                maxHeight = Math.max( box.height, maxHeight );

            } );

            kity.Utils.each( operands, function ( operand, index ) {

                var box = cached[ index ];

                operand.translate( offset - box.x, ( maxHeight - ( box.y + box.height ) ) / 2 );

                offset += box.width;

            } );

        }

    } );

} );