/**
 * 组合表达式
 * 可以组合多个表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity"),
        CombinationOperator = require( "operator/combination" );

    return kity.createClass( 'CombinationExpression', {

        base: require( "expression/compound" ),

        constructor: function () {

            this.callBase();

            this.setOperator( new CombinationOperator() );

            kity.Utils.each( arguments, function ( operand, index ) {

                this.setOperand( operand, index );

            }, this );

        }

    } );

} );
