/**
 * 真超集表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SupseteqOperator = require( "operator/binary-opr/relational/set/supseteq" );

    return kity.createClass( 'SupseteqExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SupseteqOperator() );

        }

    } );

} );
