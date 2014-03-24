/**
 * 文本
 */

define( function ( require, exports, module ) {

    var kity = require( "kity" ),
        Char = require( "char/char" );


    return kity.createClass( 'Text', {

        base: require( "signgroup" ),

        constructor: function ( content ) {

            this.callBase();

            this.chars = null;
            this.contentText = content || "";
            this.contentShape = new kity.Group();

            initContentShape.call( this );

            this.addShape( this.contentShape );

        },

        getBaseHeight: function () {

            var chars = this.contentShape.getItems(),
                currentChar = null,
                index = 0,
                height = 0;

            while ( currentChar = chars[ index ] ) {

                height = Math.max( height, currentChar.getBaseHeight() );
                index++;

            }

            return height;

        },

        addedCall: function () {

            var offset = 0;

            kity.Utils.each( this.chars, function ( charData, index ) {

                var charShape = this.contentShape.getItem( index );

                charShape.translate( offset, 0 );

                offset += charShape.getBoxWidth();

            }, this );

        }

    } );


    function initContentShape () {

        var match = null,
            content = this.contentText,
            chars = [];

        while ( match = /^([^\\]*)(\\[^\\]+\\)([\s\S]*)/.exec( content ) ) {

            content = match[3];
            chars = chars.concat( match[1].split( "" ) );
            chars.push( match[2] );

        }

        chars = chars.concat( content.split( "" ) );

        // 字符数组
        this.chars = chars;

        kity.Utils.each( chars, function ( charData, index ) {

            var charShape = new Char( charData );

            this.contentShape.addShape( charShape );

        }, this );

    }

} );