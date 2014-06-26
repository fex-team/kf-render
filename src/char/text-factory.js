/*!
 * 工厂方法，创建兼容各浏览器的text实现
 */

define( function ( require ) {

    var kity = require( "kity" ),
        divNode = document.createElement( "div" ),
        NAMESPACE = "http://www.w3.org/XML/1998/namespace";

    function createText ( content ) {

        var text = new kity.Text();

        // Non-IE
        if ( "innerHTML" in text.node ) {
            text.node.setAttributeNS( NAMESPACE, "xml:space", "preserve" );
        } else {
            if ( content.indexOf( " " ) != -1 ) {
                content = convertContent( content );
            }
        }

        text.setContent( content );

        return text;

    }

    /**
     * 构建节点来转换内容
     */
    function convertContent ( content ) {
        divNode.innerHTML = '<svg><text gg="asfdas">' + content.replace( /\s/gi, "&nbsp;" ) + '</text></svg>';
        return divNode.firstChild.firstChild.textContent;
    }

    return {
        create: function ( content ) {

            return createText( content );

        }
    };

} );
