/**
 * 上标表达式
 */

define( function ( require ) {

    var kity = require( "kity" ),
        ScriptOperator = require( "operator/script" );

    return kity.createClass( 'ScriptExpression', {

        base: require( "expression/compound" ),

        constructor: function ( operand, superscript, subscript ) {

            this.callBase();

            this.setFlag( "Script" );

            this.setOperator( new ScriptOperator() );

            this.setOpd( operand );
            this.setSuperscript( superscript );
            this.setSubscript( subscript );

        },

        setOpd: function ( operand ) {
            this.setOperand( operand, 0 );
        },

        setSuperscript: function ( sup ) {
            this.setOperand( sup, 1 );
        },

        setSubscript: function ( sub ) {
            this.setOperand( sub, 2 );
        }

    } );

} );
