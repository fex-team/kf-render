/**
 * 乘法操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'MultiplicationOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var ltr = new kity.Rect( 5, 13, 17, 1, 1 ).fill( "black" ),
                rtl = new kity.Rect( 13, 5, 1, 17, 1 ).fill( "black" );

            this.callBase( "Multiplication" );

            this.addOperatorShape( ltr.setAnchor( 14, 14 ).rotate( 45 ) );
            this.addOperatorShape( rtl.setAnchor( 14, 14 ).rotate( 45 ) );

        }

    } );

} );