/**
 * 远大于表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        GgOperator = require( "operator/binary-opr/relational/gg" );

    return kity.createClass( 'GgExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new GgOperator() );

        }

    } );

} );
