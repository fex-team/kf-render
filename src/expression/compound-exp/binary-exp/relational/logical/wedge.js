/**
 * "⋀"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        WedgeOperator = require( "operator/binary-opr/relational/logical/wedge" );

    return kity.createClass( 'WedgeExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new WedgeOperator() );

        }

    } );

} );
