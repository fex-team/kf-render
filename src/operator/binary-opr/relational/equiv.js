/**
 * "≡"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'EquivOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.864,6.961C0.48,6.961,0,6.961,0,6.481s0.432-0.48,0.84-0.48h14.329c0.408,0,0.84,0,0.84,0.48s-0.456,0.48-0.864,0.48   H0.864z M0.84,11.617c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h14.329c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.84   z M0.84,16.273c-0.408,0-0.84,0-0.84-0.48s0.48-0.48,0.864-0.48h14.281c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Equiv" );

            opShape.translate( 5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
