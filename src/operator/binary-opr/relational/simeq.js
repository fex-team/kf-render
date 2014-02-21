/**
 * simeq操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SimeqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M12.001,11.137c-1.608,0-2.88-0.984-4.152-1.992c-1.248-0.96-2.4-1.8-3.84-1.8c-1.296,0-3.216,0.864-3.336,3.216   c0,0.072-0.072,0.552-0.336,0.552C0.312,11.113,0,11.089,0,10.369c0-2.256,1.656-4.368,4.008-4.368c1.608,0,2.88,0.984,4.152,1.992   c1.248,0.96,2.4,1.8,3.84,1.8c1.56,0,3.24-1.128,3.336-3.12c0.024-0.552,0.24-0.648,0.336-0.648c0.168,0,0.336,0.216,0.336,0.744   C16.009,9.025,14.353,11.137,12.001,11.137z M15.145,15.313c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84   c-0.408,0-0.84,0-0.84-0.48s0.48-0.48,0.864-0.48H15.145z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Simeq" );

            opShape.translate( 5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
