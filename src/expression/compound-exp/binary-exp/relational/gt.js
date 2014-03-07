/**
 * 大于表达式: >
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        GtOperator = require( "operator/binary-opr/relational/gt" );

    return kity.createClass( 'GtExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new GtOperator() );

        }

    } );

} );
