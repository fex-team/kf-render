/**
 * 等号操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'EqualOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            this.callBase( "Equal" );

            this.addOperatorShape( new kity.Rect( 0, 12, 43, 3, 10 ).fill( "black" ) );
            this.addOperatorShape( new kity.Rect( 0, 28, 43, 3, 3 ).fill( "black" ) );

        }

    } );

} );