/**
 * 积分表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),

        IntegrationOperator = require( "operator/integration"),

        IntegrationExpression = kity.createClass( 'IntegrationExpression', {

            base: require( "expression/compound" ),

            /**
             * 构造积分表达式
             * @param integrand 被积函数
             * @param supOperand 上限
             * @param subOperand 下限
             */
            constructor: function ( superscript, subscript ) {

                this.callBase();

                this.setFlag( "Integration" );

                this.setOperator( new IntegrationOperator() );

                this.setSuperscript( superscript );
                this.setSubscript( subscript );

            },

            setType: function ( type ) {
                this.getOperator().setType( type );
            },

            resetType: function () {
                this.getOperator().resetType();
            },

            setSuperscript: function ( sup ) {

                this.setOperand( sup, 0 );

            },

            setSubscript: function ( sub ) {

                this.setOperand( sub, 1 );

            }

        } );


    return IntegrationExpression;

} );
