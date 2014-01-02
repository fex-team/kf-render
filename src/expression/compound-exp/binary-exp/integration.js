/**
 * 积分表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        IntegrationOperator = require( "operator/binary-opr/integration" );

    return kity.createClass( 'IntegrationExpression', {

        base: require( "expression/compound-exp/binary-exp/up-down" ),

        /**
         * 构造积分表达式
         * @param upOperand
         * @param bottomOperand 指数
         */
        constructor: function ( upOperand, downOperand ) {

            this.callBase( upOperand, downOperand );

            this.setOperator( new IntegrationOperator() );

        }

    } );

} );
