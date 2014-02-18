/**
 * 负正操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'MinusPlusOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Mp" );

            var pathData = "M8.497,20.234c0,0.36,0,0.888-0.48,0.888s-0.48-0.432-0.48-0.816v-6.697H0.84c-0.408,0-0.84,0-0.84-0.48   s0.432-0.48,0.84-0.48h6.697V6.097H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h14.329c0.408,0,0.84,0,0.84,0.48   s-0.432,0.48-0.84,0.48H8.497v6.553h6.672c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H8.497V20.234z";

            // 绘制符号图形
            this.addOperatorShape( new kity.Path( pathData ).fill( "black" ).translate( 5, 2 ) );

        }

    } );

} );
