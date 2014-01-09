/**
 * 超集表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SuperSetOperator = require( "operator/binary-opr/set/super-set" );

    return kity.createClass( 'SuperSetExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new SuperSetOperator() );

        }

    } );

} );
