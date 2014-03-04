/**
 * ⋃
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'CupOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M13.345,12.458c0,3.528-3.552,5.208-6.672,5.208c-3,0-6.672-1.584-6.672-5.232V3.648c0-0.432,0-0.864,0.48-0.864   s0.48,0.432,0.48,0.864v8.665c0,0.648,0,2.184,1.848,3.36c1.272,0.816,2.784,1.032,3.864,1.032c1.8,0,5.712-0.768,5.712-4.368   V3.648c0-0.432,0-0.864,0.48-0.864s0.48,0.432,0.48,0.864V12.458z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Cup" );

            opShape.translate( 6.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
