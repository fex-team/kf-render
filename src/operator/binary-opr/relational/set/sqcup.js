/**
 * ⊔
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SqcupOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M13.057,16.273c0,0.792-0.072,0.864-0.864,0.864H0.864C0.096,17.138,0,17.042,0,16.273V3.648c0-0.432,0-0.864,0.48-0.864   s0.48,0.432,0.48,0.864v12.529h11.137V3.648c0-0.432,0-0.864,0.48-0.864c0.48,0,0.48,0.432,0.48,0.864V16.273z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Sqcup" );

            opShape.translate( 6.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
