/**
 * "⋁"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'VeeOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M7.2,18.025c-0.144,0.336-0.216,0.504-0.528,0.504c-0.216,0-0.36-0.096-0.552-0.504L0.144,4.512C0,4.224,0,4.176,0,4.128   c0-0.264,0.216-0.48,0.48-0.48c0.168,0,0.36,0.048,0.552,0.504l5.641,12.721l5.641-12.697c0.168-0.36,0.312-0.528,0.552-0.528   c0.264,0,0.48,0.216,0.48,0.48c0,0.12-0.024,0.168-0.168,0.48L7.2,18.025z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Vee" );

            opShape.translate( 6.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
