/**
 * 字符类
 */

define( function ( require, exports, module ) {

    var kity = require( "kity" ),
        CHAR_DATA = require( 'char/data' );

    return kity.createClass( "Char", {

        base: require( "signgroup" ),

        constructor: function ( value ) {

            var currentData = CHAR_DATA[ value ];

            if ( !currentData ) {
                throw new Error( 'invalid character: ' + value );
            }

            this.callBase();

            this.value = value;

            this.contentShape = new kity.Group();

            this.box = new kity.Path( currentData.box ).fill( "red" );
            this.char = new kity.Path( currentData.path ).fill( "black" );

            this.char.translate( currentData.offset.x, currentData.offset.y );

            this.contentShape.addShape( this.box );
            this.contentShape.addShape( this.char );

            this.addShape( this.contentShape );

        },

        getBaseWidth: function () {

            return this.char.getWidth();

        },

        getBaseHeight: function () {

            return this.char.getHeight();

        },

        getBoxWidth: function () {

            return this.box.getWidth();

        }

    } );

} );