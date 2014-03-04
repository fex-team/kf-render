/**
 * sim操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SimOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M11.977,13.945c-1.632,0-2.88-1.104-4.104-2.208c-1.176-1.032-2.328-2.064-3.84-2.064c-1.464,0-3.264,1.056-3.36,3.696   c0,0.072-0.072,0.552-0.336,0.552c-0.024,0-0.336,0-0.336-0.768c0-2.184,1.416-4.824,4.032-4.824c1.632,0,2.88,1.104,4.104,2.208   c1.176,1.032,2.328,2.064,3.84,2.064c1.68,0,3.264-1.32,3.36-3.624c0.024-0.456,0.216-0.624,0.336-0.624   c0.192,0,0.336,0.24,0.336,0.768C16.009,11.305,14.593,13.945,11.977,13.945z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Sim" );

            opShape.translate( 5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
