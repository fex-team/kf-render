/**
 * 小于等于操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'LeqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M1.608,8.833l12.553,5.904c0.408,0.192,0.504,0.336,0.504,0.552c0,0.264-0.216,0.48-0.48,0.48c-0.072,0-0.12,0-0.432-0.168   L0.48,9.361C0.144,9.217,0,9.049,0,8.833c0-0.192,0.072-0.36,0.48-0.552l13.273-6.264c0.096-0.048,0.313-0.144,0.432-0.144   c0.288,0,0.48,0.216,0.48,0.48c0,0.288-0.192,0.408-0.456,0.528L1.608,8.833z M0.84,20.426c-0.408,0-0.84,0-0.84-0.48   s0.504-0.48,0.864-0.48h12.937c0.36,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Leq" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
