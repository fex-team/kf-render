/**
 * in: ∈
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'InOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.984,11.617c0.288,3.216,3.048,5.521,6.433,5.521h3.745c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.369   c-4.104,0-7.369-3.12-7.369-6.96s3.264-6.96,7.369-6.96h3.792c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H7.417   c-3.384,0-6.145,2.304-6.433,5.521h10.177c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.984z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "In" );

            opShape.translate( 7, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
