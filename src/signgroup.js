/**
 * Created by hn on 13-12-3.
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' );

    return kity.createClass( 'SignGroup', {

        base: kity.Group,

        constructor: function () {

            this.callBase();
            this.children = [];

            this.zoom = 1;

        },

        getChildren: function () {

            return this.children;

        },

        getChild: function ( index ) {

            return this.children[ index ] || null;

        },

        setZoom: function ( zoom ) {

            this.zoom = zoom;

        },

        getZoom: function () {

            return this.zoom;

        },

        setChildren: function ( index, exp ) {

            // 首先清理掉之前的表达式
            if ( this.children[ index ] ) {

                this.children[ index ].remove();

            }

            this.children[ index ] = exp;
            this.addShape( exp );

        },

        addedCall: function () {}

    } );

} );