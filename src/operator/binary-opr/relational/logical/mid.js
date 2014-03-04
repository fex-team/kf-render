/**
 * "|"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'MidOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.96,23.138c0,0.432,0,0.864-0.48,0.864S0,23.57,0,23.138V0.864C0,0.432,0,0,0.48,0s0.48,0.432,0.48,0.864V23.138z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Mid" );

            opShape.translate( 12.5, 0 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
