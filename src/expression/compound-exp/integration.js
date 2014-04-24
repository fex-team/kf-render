/**
 * 积分表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),

        IntegrationOperator = require( "operator/integration"),

        IntegrationExpression = kity.createClass( 'IntegrationExpression', {

            base: require( "expression/compound-exp/scriptable-func" ),

            /**
             * 构造积分表达式
             * @param integrand 被积函数
             * @param supOperand 上限
             * @param subOperand 下限
             */
            constructor: function ( integrand, superscript, subscript ) {

                var operator = new IntegrationOperator();

                this.callBase( operator, integrand, superscript, subscript );
                this.setFlag( "Integration" );

                this.setScriptOperand( operator );
                this.setOperator( operator );

                this.setIntegrand( integrand );
                this.setSuperscript( superscript );
                this.setSubscript( subscript );

                this.setScriptOperand( operator );
                this.setOperator( operator );

                // 设置下标偏移
                this.setSubOffset( -20 );

            },

            setType: function ( type ) {
                this.getOperator().setType( type );
            },

            resetType: function () {
                this.getOperator().resetType();
            },

            setIntegrand: function ( exp ) {

                this.setOperand( exp, 0 );

            },

            setSuperscript: function ( sup ) {

                this.setOperand( sup, 1 );
                this.setScriptSup( this.getOperand( 1 ) );

            },

            setSubscript: function ( sub ) {

                this.setOperand( sub, 2 );
                this.setScriptSub( this.getOperand( 2 ) );

            }

        } );


    kity.Utils.extend( IntegrationExpression, IntegrationOperator.types );

    return IntegrationExpression;

} );
