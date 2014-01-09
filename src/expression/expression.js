/**
 * 基础表达式， 该类是表达式和操作数的高层抽象
 * @abstract
 */

define( function ( require, exports, module ) {

    var kity = require( "kity" );

    return kity.createClass( 'Expression', {

        base: require( "signgroup" ),

        getBaseWidth: function () {

            return this.getWidth();

        },

        getBaseHeight: function () {

            return this.getHeight();

        }

    } );

} );