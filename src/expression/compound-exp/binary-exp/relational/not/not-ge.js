/**
 * "≱"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotGeOperator = require( "operator/binary-opr/relational/not/not-ge" );

    return kity.createClass( 'NotGeExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotGeOperator() );

        }

    } );

} );
