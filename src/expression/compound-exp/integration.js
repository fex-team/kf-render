/**
 * 积分表达式
 */

define( function ( require ) {

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
            constructor: function ( integrand, superscript, subscript ) {

                this.callBase();

                this.setFlag( "Integration" );

                this.setOperator( new IntegrationOperator() );

                this.setIntegrand( integrand );
                this.setSuperscript( superscript );
                this.setSubscript( subscript );

            },

            setType: function ( type ) {
                this.getOperator().setType( type );
                return this;
            },

            resetType: function () {
                this.getOperator().resetType();
                return this;
            },

            setIntegrand: function ( integrand ) {
                this.setOperand( integrand, 0 );
            },

            setSuperscript: function ( sup ) {
                this.setOperand( sup, 1 );
            },

            setSubscript: function ( sub ) {
                this.setOperand( sub, 2 );
            }

        } );


    return IntegrationExpression;

} );
