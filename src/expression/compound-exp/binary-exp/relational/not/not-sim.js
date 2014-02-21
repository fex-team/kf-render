/**
 * "≁"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotSimOperator = require( "operator/binary-opr/relational/not/not-sim" );

    return kity.createClass( 'NotSimExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotSimOperator() );

        }

    } );

} );
