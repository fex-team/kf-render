/**
 * 约等于操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'ApproxOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M12.001,10.201c-1.56,0-2.856-0.864-4.152-1.728C6.601,7.633,5.4,6.889,4.008,6.889c-1.248,0-3.216,0.72-3.336,2.736   c0,0.096-0.096,0.552-0.336,0.552C0.192,10.177,0,9.985,0,9.457c0-2.208,1.776-3.912,4.008-3.912c1.56,0,2.856,0.864,4.152,1.728   c1.248,0.84,2.448,1.584,3.84,1.584c1.56,0,3.24-0.984,3.336-2.64c0.024-0.552,0.24-0.648,0.336-0.648   c0.168,0,0.336,0.216,0.336,0.72C16.009,8.497,14.233,10.201,12.001,10.201z M12.001,15.793c-1.56,0-2.856-0.864-4.152-1.728   c-1.248-0.84-2.448-1.584-3.84-1.584c-1.248,0-3.216,0.72-3.336,2.736c0,0.096-0.096,0.552-0.336,0.552   C0.192,15.77,0,15.578,0,15.049c0-2.208,1.776-3.912,4.008-3.912c1.56,0,2.856,0.864,4.152,1.728   c1.248,0.84,2.448,1.584,3.84,1.584c1.56,0,3.24-0.984,3.336-2.64c0.024-0.528,0.24-0.648,0.336-0.648   c0.048,0,0.336,0.048,0.336,0.744C16.009,14.018,14.281,15.793,12.001,15.793z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Approx" );

            opShape.translate( 5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
