/**
 * "平行"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'ParallelOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.96,23.186c0,0.384,0,0.816-0.48,0.816S0,23.498,0,23.114V0.888C0,0.528,0,0,0.48,0s0.48,0.432,0.48,0.816V23.186z    M5.64,23.114c0,0.36,0,0.888-0.48,0.888s-0.48-0.432-0.48-0.816V0.816C4.68,0.432,4.68,0,5.16,0s0.48,0.504,0.48,0.888V23.114z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Parallel" );

            opShape.translate( 11.5 , 0 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
