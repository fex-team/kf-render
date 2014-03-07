/**
 * ⊓
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SqcapOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M13.057,16.273c0,0.432,0,0.864-0.48,0.864c-0.48,0-0.48-0.504-0.48-0.864V3.745H0.96v12.529c0,0.432,0,0.864-0.48,0.864   S0,16.634,0,16.273V3.648c0-0.792,0.072-0.864,0.84-0.864h11.377c0.768,0,0.84,0.072,0.84,0.864V16.273z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Sqcap" );

            opShape.translate( 6.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
