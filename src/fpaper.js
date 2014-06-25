/**
 * 公式专用paper
 */

define( function ( require ) {

    var kity = require( 'kity' );

    return kity.createClass( 'FPaper', {

        base: kity.Paper,

        constructor: function ( container ) {

            this.callBase( container );

            this.doc = container.ownerDocument;
            this.container = new kity.Group();
            this.container.setAttr( "data-type", "kf-container" );

            this.background = new kity.Group();
            this.background.setAttr( "data-type", "kf-bg" );

            this.baseZoom = 1;
            this.zoom = 1;

            this.base( 'addShape', this.background );
            this.base( 'addShape', this.container );

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