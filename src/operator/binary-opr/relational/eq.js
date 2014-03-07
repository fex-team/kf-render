/**
 * 等号操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        CHAR_DATA = require( "char/data" );

    return kity.createClass( 'EqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var opData = CHAR_DATA.std[ "\\eq\\" ],
                opShape = null;

            this.callBase( "Equal" );

            opShape = new kity.Path( opData.path ).fill( "black" );
            opShape.translate( opData.offset.x, opData.offset.y );

            // 绘制符号图形
            this.addOperatorShape( opShape );
            this.setBoxSize( opData.size[ 0 ], opData.size[ 1 ] );

        }

    } );

} );