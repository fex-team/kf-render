/**
 * ⋂
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'CapOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M13.345,16.802c0,0.432,0,0.864-0.48,0.864s-0.48-0.432-0.48-0.864V8.137c0-0.648,0-2.184-1.848-3.36   C9.265,3.96,7.752,3.745,6.672,3.745c-1.8,0-5.712,0.768-5.712,4.368v8.689c0,0.432,0,0.864-0.48,0.864S0,17.234,0,16.802V7.993   c0-3.528,3.552-5.208,6.672-5.208c3,0,6.672,1.584,6.672,5.232V16.802z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Cap" );

            opShape.translate( 6.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
