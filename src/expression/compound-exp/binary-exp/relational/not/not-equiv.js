/**
 * ""表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotEquivOperator = require( "operator/binary-opr/relational/not/not-equiv" );

    return kity.createClass( 'NotEquivExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotEquivOperator() );

        }

    } );

} );
