/**
 * "≰"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotInOperator = require( "operator/binary-opr/relational/not/not-in" );

    return kity.createClass( 'NotInExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotInOperator() );

        }

    } );

} );
