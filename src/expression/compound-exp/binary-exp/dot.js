/**
 * 点积表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        DotOperator = require( "operator/binary-opr/dot" );

    return kity.createClass( 'DotExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new DotOperator() );

        }

    } );

} );
