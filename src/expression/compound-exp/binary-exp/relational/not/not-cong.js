/**
 * "≇"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotCongOperator = require( "operator/binary-opr/relational/not/not-cong" );

    return kity.createClass( 'NotCongExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotCongOperator() );

        }

    } );

} );
