/*!
 * Kity Formula 公式表示法Parser接口
 */

define( function ( require, exports, module ) {

    // Parser 配置列表
    var CONF = {},
        IMPL_POLL = {},
        // 内部简单工具类
        Utils = {

            extend: function ( target, sources ) {

                var source = null;

                sources = [].slice.call( arguments, 1 );

                for ( var i = 0, len = sources.length; i < len; i++ ) {

                    source = sources[ i ];

                    for ( var key in source ) {

                        if ( source.hasOwnProperty( key ) ) {

                            target[ key ] = source[ key ];

                        }

                    }

                }

            },

            setData: function ( container, key, value ) {

                if ( typeof key === "string" ) {

                    container[ key ] = value;

                } else if ( typeof key === "object" ) {

                    for ( value in key ) {

                        if ( key.hasOwnProperty( value ) ) {

                            container[ value ] = key[ value ];

                        }

                    }

                } else {
                    // 配置项类型错误
                    throw new Error( 'invalid option' );

                }

            }

        };


    /**
     * 解析器
     */
    var Parser = {

        use: function ( type ) {

            if ( !IMPL_POLL[ type ] ) {
                throw new Error( 'unknown parser type' );
            }

            return this.proxy( IMPL_POLL[ type ] );

        },

        config: function ( key, value ) {

            Utils.setData( CONF, key, value );

            return this;

        },

        /**
         * 注册解析器实现
         * @param type 解析器所属类型
         * @param parserImpl 解析器实现
         */
        register: function ( type, parserImpl ) {

            IMPL_POLL[ type.toLowerCase() ] = parserImpl;

            return this;

        },

        // 提供构造器的实现的默认结构
        implement: function ( parser ) {

            var impl = function () {},
                constructor = parser.constructor || function () {},
                result = function () {
                    ParserInterface.call( this );
                    constructor.call( this );
                };

            impl.prototype = ParserInterface.prototype;

            result.prototype = new impl();

            delete parser.constructor;

            for ( var key in parser ) {

                if ( key !== "constructor" && parser.hasOwnProperty( key ) ) {

                    result.prototype[ key ] = parser[ key ];

                }

            }

            return result;

        },

        /**
         * 代理给定的parser实现
         * @private
         * @param parserImpl 需代理的parser实现
         */
        proxy: function ( parserImpl ) {

            return new ParserProxy( parserImpl );

        }

    };


    /**
     * parser实现的代理对象， 所有实现均通过该代理对象对外提供统一接口
     * @constructor
     * @param parserImpl 需代理的对象
     */
    function ParserProxy ( parserImpl ) {

        this.impl = new parserImpl();
        this.conf = {};

    }


    Utils.extend( ParserProxy.prototype, {

        config: function ( key, value ) {

            Utils.setData( this.conf, key, value );

        },

        /**
         * 设置特定解析器实现所需的配置项，参数也可以是一个Key-Value Mapping
         * @param key 配置项名称
         * @param value 配置项值
         */
        set: function ( key, value ) {

            this.impl.set( key, value );

        },

        parse: function ( data ) {

            var result = {

                config: {},

                // 调用实现获取解析树
                tree: this.impl.parse( data )

            };

            Utils.extend( result.config, CONF, this.conf );

            return result;

        }

    } );

    /**
     * 解析器所需实现的接口
     * @constructor
     */
    function ParserInterface () {

        this.conf = {};

    }

    Utils.extend( ParserInterface.prototype, {

        set: function ( key, value ) {

            Utils.extend( this.conf, key, value );

        },

        /**
         * 需要特定解析器实现， 该方法是解析器的核心方法，解析器的实现者应该完成该方法对给定数据进行解析
         * @param data 待解析的数据
         * @return 解析树， 具体格式庆参考Kity Formula Parser 的文档
         */
        parse: function ( data ) {

            throw new Error( "Abstract function" );

        }


    } );

    // exports
    module.exports = {
        Parser: Parser,
        ParserInterface: ParserInterface
    };

} );