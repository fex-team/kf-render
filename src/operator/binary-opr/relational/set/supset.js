/**
 * 超集: ⊃
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SupsetOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.84,5.137c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.457c4.104,0,7.369,3.12,7.369,6.96s-3.264,6.96-7.369,6.96   H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.409c3.745,0,6.457-2.784,6.457-6s-2.712-6-6.457-6H0.84z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Supset" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
