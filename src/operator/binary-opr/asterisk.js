/**
 * 星号操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M4.873,5.736l0.336,3.648l0.048,0.312c0,0.264-0.216,0.648-0.72,0.648c-0.408,0-0.696-0.336-0.696-0.648l0.048-0.312   l0.336-3.672l-3,2.184C0.937,8.113,0.816,8.113,0.696,8.113C0.264,8.113,0,7.729,0,7.393C0,6.96,0.288,6.84,0.528,6.721L3.913,5.16   L0.528,3.624C0.288,3.504,0,3.384,0,2.952c0-0.336,0.264-0.72,0.696-0.72c0.168,0,0.216,0,0.528,0.24l3,2.136L3.889,0.96   L3.84,0.648C3.84,0.384,4.057,0,4.561,0c0.408,0,0.696,0.336,0.696,0.648L5.208,0.96L4.873,4.632l3-2.184   c0.288-0.216,0.408-0.216,0.528-0.216c0.432,0,0.696,0.384,0.696,0.72c0,0.432-0.288,0.552-0.528,0.672L5.185,5.185l3.384,1.536   c0.24,0.12,0.528,0.24,0.528,0.672c0,0.336-0.264,0.72-0.696,0.72c-0.168,0-0.216,0-0.528-0.24L4.873,5.736z";

    return kity.createClass( 'AsteriskOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "Asterisk" );

            shape = new kity.Path( pathData ).fill( "black" );
            shape.translate( 8.5, 8 );

            this.addOperatorShape( shape );

        }

    } );

} );
