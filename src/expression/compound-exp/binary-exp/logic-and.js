/**
 * 逻辑与（交运算）表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        LogicAndOperator = require( "operator/binary-opr/logic-and" );

    return kity.createClass( 'LogicAndExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new LogicAndOperator() );

        }

    } );

} );
