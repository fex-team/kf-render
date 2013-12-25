/**
 * 上标表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SuperscriptOperator = require( "operator/binary-opr/superscript" );

    return kity.createClass( 'SuperscriptExpression', {

        base: require( "expression/compound-exp/binary" ),

        constructor: function ( operand, superscript ) {

            this.callBase( operand, superscript );

            this.setOperator( new SuperscriptOperator() );

        }

    } );

} );
