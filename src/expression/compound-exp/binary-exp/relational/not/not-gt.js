/**
 * "≯"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotGtOperator = require( "operator/binary-opr/relational/not/not-gt" );

    return kity.createClass( 'NotGtExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotGtOperator() );

        }

    } );

} );
