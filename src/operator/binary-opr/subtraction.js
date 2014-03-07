/**
 * 减法操作符
 */

define( function ( require, exports, module ) {

    var kity = require( 'kity' ),
        CHAR_DATA = require( "char/data" );

    return kity.createClass( 'SubtractionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var opData = CHAR_DATA.std[ "-" ],
                opShape = null;

            this.callBase( "Subtraction" );

            opShape = new kity.Path( opData.path ).fill( "black" );
            opShape.translate( opData.offset.x, opData.offset.y );

            // 绘制符号图形
            this.addOperatorShape( opShape );
            this.setBoxSize( opData.size[ 0 ], opData.size[ 1 ] );

        }

    } );

} );