/**
 * 真子集: ⊆
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SubseteqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M7.417,2.833c-3.72,0-6.457,2.736-6.457,6c0,3.168,2.665,5.977,6.457,5.977h6.409c0.408,0,0.84,0,0.84,0.48   s-0.432,0.48-0.84,0.48H7.369C3.313,15.77,0,12.673,0,8.809c0-3.792,3.24-6.937,7.369-6.937h6.457c0.408,0,0.84,0,0.84,0.48   s-0.432,0.48-0.84,0.48H7.417z M13.825,19.466c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H1.32c-0.408,0-0.84,0-0.84-0.48   s0.432-0.48,0.84-0.48H13.825z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Subseteq" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
