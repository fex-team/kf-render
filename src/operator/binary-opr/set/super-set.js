/**
 * 超集操作符: ⊇
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M0,32.203v-3.305h29.145c4.664,0,8.291-1.201,10.881-3.604c2.59-2.402,3.885-5.396,3.885-8.982   c0-2.859-0.885-5.408-2.654-7.646c-1.77-2.238-3.51-3.556-5.221-3.955c-3.469-0.773-5.73-1.16-6.785-1.16H0V0h28.301   c3.609,0,6.516,0.399,8.719,1.195c2.859,1.055,5.291,2.924,7.295,5.607c2.004,2.684,3.006,5.783,3.006,9.299   c0,2.93-0.791,5.69-2.373,8.279c-1.582,2.59-3.639,4.541-6.17,5.854c-2.531,1.313-6.024,1.969-10.477,1.969H0z M0,39.199h46.23   v3.305H0V39.199z";

    return kity.createClass( 'SuperSetOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "SubSet" );

            this.setBoxSize( 67, 63 );
            shape = new kity.Path( pathData ).fill( "black" );

            this.addOperatorShape( shape );

        }

    } );

} );
