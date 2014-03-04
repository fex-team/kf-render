/**
 * 真超集: ⊇
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SupseteqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.84,2.833c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.457c4.057,0,7.369,3.096,7.369,6.96   c0,3.792-3.24,6.937-7.369,6.937H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.409c3.72,0,6.457-2.736,6.457-6   c0-3.168-2.664-5.977-6.457-5.977H0.84z M0.84,20.426c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h12.505   c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.84z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Supseteq" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
