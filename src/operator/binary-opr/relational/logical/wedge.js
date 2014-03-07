/**
 * ⋀操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'WedgeOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M13.201,17.666c0.144,0.288,0.144,0.336,0.144,0.384c0,0.264-0.216,0.48-0.48,0.48c-0.096,0-0.336,0-0.552-0.504   L6.672,5.304L1.032,18.025c-0.192,0.456-0.384,0.504-0.552,0.504c-0.264,0-0.48-0.216-0.48-0.48c0-0.12,0.024-0.168,0.168-0.48   L6.145,4.152C6.289,3.816,6.36,3.648,6.672,3.648c0.216,0,0.36,0.096,0.552,0.504L13.201,17.666z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Wedge" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
