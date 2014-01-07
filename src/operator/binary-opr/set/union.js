/**
 * 并集操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M0,28.688V0h3.375v28.406c0,3.19,1.406,6.047,4.219,8.578s6.794,3.797,11.953,3.797c5.155,0,9.141-1.266,11.953-3.797   s4.219-5.669,4.219-9.422V0h3.375v27.563c0,5.251-1.876,9.33-5.625,12.234c-3.753,2.909-8.394,4.359-13.922,4.359   c-5.533,0-10.173-1.45-13.922-4.359C1.872,36.892,0,33.188,0,28.688z";

    return kity.createClass( 'UnionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "Union" );

            shape = new kity.Path( pathData ).fill( "black" );

            this.addOperatorShape( shape );

        }

    } );

} );
