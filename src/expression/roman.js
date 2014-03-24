/**
 * 罗马文本表达式
 */

define( function ( require, exports, module ) {

    var RomanText = require( "char/roman" ),
        kity = require( "kity" );

    return kity.createClass( 'RomanTextExpression', {

        base: require( "expression/expression" ),

        constructor: function ( content ) {

            this.callBase();

            this.setFlag( "RomanText" );

            this.content = content + '';

            this.setChildren( 0, new RomanText( this.content ) );

        }

    } );

} );