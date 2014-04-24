/**
 * 公式专用paper
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' ),
        FontInstall = require( "string/installer" );

    return kity.createClass( 'FPaper', {

        base: kity.Paper,

        constructor: function ( container ) {

            this.callBase( container );

            this.container = new kity.Group();
            this.container.setAttr( "data-type", "kf-container" );

            this.background = new kity.Group();
            this.background.setAttr( "data-type", "kf-bg" );

            this.baseZoom = 1;
            this.zoom = 1;

            this.base( 'addShape', this.background );
            this.base( 'addShape', this.container );

            this.initFont();

        },

        initFont: function () {

            this.fontManager = new FontInstall( this );

            this.fontManager.mount( require( "font/kf-ams-main" ) );

        },

        getZoom: function () {
            return this.zoom;
        },

        getBaseZoom: function () {

            return this.baseZoom;

        },

        addShape: function ( shape, pos ) {

            return this.container.addShape( shape, pos );

        },

        getBackground: function () {
            return this.background;
        },

        removeShape: function ( pos ) {

            return this.container.removeShape( pos );

        },

        clear: function () {

            return this.container.clear();

        }

    } );

} );