/**
 * 子集: ⊂
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SubsetOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M7.417,5.137c-3.744,0-6.457,2.784-6.457,6s2.712,6,6.457,6h6.409c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.369   c-4.104,0-7.369-3.12-7.369-6.96s3.264-6.96,7.369-6.96h6.457c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.417z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Subset" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
