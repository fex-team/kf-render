/**
 * Created by hn on 13-12-3.
 */

define( function ( require, exports, module ) {

    var Text = require( "char/text" ),
        kity = require( "kity" ),

        TextExpression = kity.createClass( 'TextExpression', {

            base: require( "expression/expression" ),

            constructor: function ( content ) {

                this.callBase();

                this.content = content + '';

                this.setChildren( 0, new Text( this.content ) );

            }

        } );

    // 自动打包
    kity.Utils.extend( TextExpression, {

        wrap: function ( operand ) {

            var operandType = typeof operand;

            if ( operandType === 'number' || operandType === 'string' ) {

                operand = new TextExpression( operand );

            }

            return operand;

        }

    } );

    return TextExpression;

} );