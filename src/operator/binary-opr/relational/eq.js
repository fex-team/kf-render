/**
 * 等号操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'EqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Eq" );

            this.addOperatorShape( new kity.Rect( 5, 10.5, 17, 1, 1 ).fill( "black" ) );
            this.addOperatorShape( new kity.Rect( 5, 15.5, 17, 1, 1 ).fill( "black" ) );

        }

    } );

} );