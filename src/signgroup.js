/*!
 * 所有符号的基类
 * @abstract
 */

define( function ( require ) {

    var kity = require( 'kity' ),
        GTYPE = require( 'def/gtype' );

    return kity.createClass( 'SignGroup', {

        base: kity.Group,

        constructor: function () {

            this.callBase();

            this.box = new kity.Rect( 0, 0, 0, 0 );
            this.type = GTYPE.UNKNOWN;

            this.addShape( this.box );

            this.zoom = 1;

        },

        setZoom: function ( zoom ) {

            this.zoom = zoom;

        },

        getZoom: function () {

            return this.zoom;

        },

        setBoxSize: function ( w, h ) {

            return this.box.setSize( w, h );

        },

        setBoxWidth: function ( w ) {

            return this.box.setWidth( w );

        },

        setBoxHeight: function ( h ) {

            return this.box.setHeight( h );

        },

        getType: function () {
            return this.type;
        },

        getBaseHeight: function () {
            return this.getHeight();
        },

        getBaseWidth: function () {
            return this.getWidth();
        },

        addedCall: function () {}

    } );

} );