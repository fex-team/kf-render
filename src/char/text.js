/**
 * Created by hn on 13-12-3.
 */

define( function ( require, exports, module ) {

    var kity = require( "kity" ),
        Char = require( "char/char" );


    return kity.createClass( 'Text', {

        base: require( "signgroup" ),

        constructor: function ( content ) {

            this.callBase();

            this.contentText = content || "";

            this.contentShape = new kity.Group();

            initContentShape.call( this );

            this.addShape( this.contentShape );

        },

        getBaseWidth: function () {

            return this.getWidth();

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

            kity.Utils.each( this.contentText.split( "" ), function ( charData, index ) {

                var charShape = this.contentShape.getItem( index );

                charShape.translate( offset, 0 );

                offset += charShape.getBoxWidth();

            }, this );

        }

    } );


    function initContentShape () {

        kity.Utils.each( this.contentText.split( "" ), function ( charData, index ) {

            var charShape = new Char( charData );

            this.contentShape.addShape( charShape );

        }, this );

    }

} );