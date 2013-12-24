/**
 * 公式专用paper
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' );

    return kity.createClass( 'FPaper', {

        base: kity.Paper,

        constructor: function ( container ) {

            this.callBase( container );

            this.baseZoom = 1;

        },

        getBaseZoom: function () {

            return this.baseZoom;

        }

    } );

} );