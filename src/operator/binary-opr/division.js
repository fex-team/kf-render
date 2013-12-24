/**
 * 除法操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'AdditionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Division" );

            this.addOperatorShape( new kity.Rect( 0, 20, 43, 3, 3 ).fill( "black" ) );
            this.addOperatorShape( new kity.Circle( 22, 11, 3 ).fill( "black" ) );
            this.addOperatorShape( new kity.Circle( 22, 32, 3 ).fill( "black" ) );

        }

    } );

} );