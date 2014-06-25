/**
 * 求和表达式
 */

define( function ( require ) {

    var kity = require( "kity" ),
        SummationOperator = require( "operator/summation" );

    return kity.createClass( 'SummationExpression', {

        base: require( "expression/compound" ),

        /**
         * 构造求和表达式
         * @param expr 求和表达式
         * @param upOperand 上标
         * @param downOperand 下标
         */
        constructor: function ( expr, superscript, subscript ) {

            this.callBase();
            this.setFlag( "Summation" );

            this.setOperator( new SummationOperator() );

            this.setExpr( expr );
            this.setSuperscript( superscript );
            this.setSubscript( subscript );

        },

        setExpr: function ( expr ) {
            this.setOperand( expr, 0 );
        },

        setSuperscript: function ( sup ) {
            this.setOperand( sup, 1 );
        },

        setSubscript: function ( sub ) {
            this.setOperand( sub, 2 );
        }

    } );

} );
