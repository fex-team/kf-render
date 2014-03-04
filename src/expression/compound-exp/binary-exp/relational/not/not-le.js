/**
 * "≰"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotLeOperator = require( "operator/binary-opr/relational/not/not-le" );

    return kity.createClass( 'NotLeExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotLeOperator() );

        }

    } );

} );
