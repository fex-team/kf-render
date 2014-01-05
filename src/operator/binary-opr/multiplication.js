/**
 * 乘法操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'MultiplicationOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var  ltr = new kity.Rect( 0, 20, 43, 3, 3 ).fill( "black"),
                rtl = new kity.Rect( 20, 0, 3, 43, 3 ).fill( "black" );

            this.callBase( "Multiplication" );

            this.addOperatorShape( ltr.setAnchor( 22, 22 ).rotate( 45 ) );
            this.addOperatorShape( rtl.setAnchor( 22, 22 ).rotate( 45 ) );

        }

    } );

} );