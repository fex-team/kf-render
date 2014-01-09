/**
 * 交集操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M39.656,15.469v29.25h-3.375V15.75c0-3.186-1.406-6.047-4.219-8.578s-6.891-3.797-12.234-3.797S10.406,4.641,7.594,7.172   s-4.219,5.673-4.219,9.422v28.125H0V16.594c0-5.247,1.872-9.325,5.625-12.234C9.374,1.455,14.106,0,19.828,0   c5.717,0,10.45,1.455,14.203,4.359C37.78,7.269,39.656,10.969,39.656,15.469z";

    return kity.createClass( 'IntersectionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "Intersection" );

            shape = new kity.Path( pathData ).fill( "black" );

            this.addOperatorShape( shape );

        }

    } );

} );
