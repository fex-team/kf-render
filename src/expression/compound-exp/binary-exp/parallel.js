/**
 * “平行”表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        ParallelOperator = require( "operator/binary-opr/parallel" );

    return kity.createClass( 'ParallelExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setFlag( "Parallel" );

            this.setOperator( new ParallelOperator() );

        }

    } );

} );
