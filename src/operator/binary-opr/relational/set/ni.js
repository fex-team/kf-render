
/**
 * ni: ∋
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'NiOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.84,5.137c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h3.792c4.104,0,7.369,3.12,7.369,6.96s-3.264,6.96-7.369,6.96   H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h3.745c3.384,0,6.145-2.304,6.433-5.521H0.84c-0.408,0-0.84,0-0.84-0.48   s0.432-0.48,0.84-0.48h10.177c-0.288-3.216-3.048-5.521-6.433-5.521H0.84z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Ni" );

            opShape.translate( 7, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
