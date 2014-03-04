/**
 * "⊐"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SqsupsetOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M15.625,17.603c0,0.768-0.096,0.84-0.84,0.84H0.84c-0.408,0-0.84,0-0.84-0.48s0.456-0.48,0.864-0.48h13.801V5.506H0.84   c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h13.945c0.768,0,0.84,0.096,0.84,0.84V17.603z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Sqsupset" );

            opShape.translate( 5.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
