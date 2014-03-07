/**
 * sim表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SimOperator = require( "operator/binary-opr/relational/sim" );

    return kity.createClass( 'SimExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SimOperator() );

        }

    } );

} );
