/*!
 * 公式工厂
 */

define( function ( require ) {

    var kity = require( 'kity' ),
        Formula = require( "formula" ),
        FontInstaller = require( "font/installer" ),
        READY_LIST = [],

        FormulaWrapper = kity.createClass( 'FormulaWrapper', {

            constructor: function ( container, options ) {

                var resource = null;

                this.container = container;
                this.options = options;

                if ( options ) {
                    resource = options.resource;
                }

                this.fontInstaller = new FontInstaller( container, resource );

                this.initFont();

            },

            initFont: function () {

                var _self = this;

                this.fontInstaller.mount( function () {

                    triggerReady( _self );

                } );

            },

            ready: function ( callback ) {

                READY_LIST.push( callback );

            }

        } );

    function triggerReady ( wrapper ) {

        var formula = new Formula( wrapper.container, wrapper.options );

        kity.Utils.each( READY_LIST, function ( handler ) {

            handler.call( formula, formula );

        } );

    }

    return {

        create: function ( container, options ) {
            return new FormulaWrapper( container, options );
        }

    };


} );
