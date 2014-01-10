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
            constructor: function ( integrand, superscript, subscript ) {

                this.callBase();

                this.setOperator( new IntegrationOperator() );
                this.setIntegrand( integrand );
                this.setSuperscript( superscript );
                this.setSubscript( subscript );

            },

            setIntegrand: function ( integrand ) {

                return this.setOperand( integrand, 0 );

            },

            setType: function ( type ) {
                this.getOperator().setType( type );
            },

            resetType: function () {
                this.getOperator().resetType();
            },

            getIntegrand: function () {

                return this.getOperand( 0 );

            },

            setSuperscript: function ( superscript ) {

                return this.setOperand( superscript, 1 );

            },

            getSuperscript: function () {

                return this.getOperand( 1 );

            },

            setSubscript: function ( subscript ) {

                return this.setOperand( subscript, 2 );

            },

            getSubscript: function () {

                return this.getOperand( 2 );

            }

        } );


    kity.Utils.extend( IntegrationExpression, IntegrationOperator.types );

    return IntegrationExpression;

} );
