/**
 * 属于（集合）操作符: ∊
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M32.766,32.168H18.809c-5.25,0-9.281-1.031-12.094-3.094C2.238,25.793,0,21.458,0,16.066c0-2.742,0.691-5.338,2.074-7.787   c1.383-2.449,3.257-4.389,5.625-5.818C10.394,0.821,14.039,0,18.633,0h14.133v3.375H18.211c-4.407,0-7.887,1.008-10.441,3.023   c-2.109,1.665-3.528,4.336-4.254,8.016h29.25v3.445H3.516c0.937,3.704,2.602,6.481,4.992,8.332c2.25,1.735,5.507,2.602,9.773,2.602   h14.484V32.168z";

    return kity.createClass( 'InSetOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "InSet" );

            this.setBoxSize( 53, 63 );
            this.operatorShape.translate( -1, 6 );

            shape = new kity.Path( pathData ).fill( "black" );

            this.addOperatorShape( shape );

        }

    } );

} );
