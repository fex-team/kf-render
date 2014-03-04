/**
 * 大于等于操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'GeqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.912,15.602C0.6,15.77,0.552,15.77,0.48,15.77C0.216,15.77,0,15.554,0,15.29c0-0.144,0.024-0.336,0.504-0.552   l12.553-5.928L0.456,2.88C0.192,2.76,0,2.641,0,2.353c0-0.264,0.192-0.48,0.48-0.48c0.048,0,0.144,0,0.48,0.168l13.225,6.24   c0.384,0.168,0.48,0.312,0.48,0.552c0,0.216-0.144,0.384-0.48,0.528L0.912,15.602z M0.84,20.426c-0.408,0-0.84,0-0.84-0.48   s0.504-0.48,0.864-0.48h12.937c0.36,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Geq" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
