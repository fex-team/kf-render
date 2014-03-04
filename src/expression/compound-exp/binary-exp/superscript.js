/**
 * 上标表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SuperscriptExpression', {

        base: require( "expression/compound-exp/script" ),

        constructor: function ( operand, superscript ) {

            this.callBase( operand, superscript, null );

        }

    } );

} );
