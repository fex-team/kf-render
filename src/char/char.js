/**
 * 字符类
 */

define( function ( require, exports, module ) {

    var kity = require( "kity" );

    return kity.createClass( "Char", {

        base: require( "signgroup" ),

        constructor: function ( value, type ) {

            var currentData;

            // 默认是标准字体
            type = type || "std";

            currentData = CHAR_DATA[ type ][ value ];

            if ( !currentData ) {
                currentData = CHAR_DATA[ "std" ][ value ];
            }

            if ( !currentData ) {
                throw new Error( 'invalid character: ' + value );
            }

            this.callBase();

            this.value = value;

            this.contentShape = new kity.Group();

            this.box = new kity.Rect( currentData.size[ 0 ] + currentData.offset.x * 2 , currentData.size[ 1 ] ).fill( "transparent" );
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