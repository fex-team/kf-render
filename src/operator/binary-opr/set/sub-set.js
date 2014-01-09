/**
 * 子集操作符: ⊆
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M39.434,0v2.754H15.146c-3.907,0-6.934,1.001-9.082,3.003c-2.149,2.002-3.223,4.497-3.223,7.485   c0,2.383,0.737,4.512,2.212,6.387c1.475,1.875,2.934,2.969,4.38,3.281c2.91,0.645,4.785,0.967,5.625,0.967h24.375v2.959H15.85   c-3.008,0-5.43-0.332-7.266-0.996c-2.383-0.879-4.409-2.436-6.079-4.673C0.835,18.931,0,16.348,0,13.418   c0-2.441,0.659-4.741,1.978-6.899C3.296,4.361,5.01,2.735,7.119,1.641C9.229,0.547,12.139,0,15.85,0H39.434z M0.85,32.666h38.584   v2.754H0.85V32.666z";

    return kity.createClass( 'IntersectionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "SubSet" );

            shape = new kity.Path( pathData ).fill( "black" );

            this.setBoxWidth( 50 );

            this.addOperatorShape( shape );

        }

    } );

} );
