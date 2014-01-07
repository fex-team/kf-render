/**
 * 子集表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SubSetOperator = require( "operator/binary-opr/set/sub-set" );

    return kity.createClass( 'SubSetExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SubSetOperator() );

        }

    } );

} );
