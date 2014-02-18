/**
 * 除法操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'AdditionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Division" );

            this.addOperatorShape( new kity.Rect( 5, 13, 17, 1, 1 ).fill( "black" ) );
            this.addOperatorShape( new kity.Circle( 14, 10, 1 ).fill( "black" ) );
            this.addOperatorShape( new kity.Circle( 14, 17, 1 ).fill( "black" ) );

        }

    } );

} );