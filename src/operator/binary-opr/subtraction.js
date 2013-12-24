/**
 * 减法操作符
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' );

    return kity.createClass( 'SubtractionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Subtraction" );

            this.addOperatorShape( new kity.Rect( 0, 20, 43, 3, 3 ).fill( "black" ) );

        }

    } );

} );