/**
 * 小于操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'LtOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M1.488,11.161l12.361,5.688c0.432,0.192,0.48,0.36,0.48,0.504c0,0.264-0.192,0.456-0.456,0.456   c-0.048,0-0.096-0.024-0.408-0.168L0.48,11.665C0.024,11.449,0,11.305,0,11.137c0-0.144,0.048-0.312,0.48-0.504l12.985-5.977   c0.336-0.144,0.36-0.168,0.408-0.168c0.264,0,0.456,0.192,0.456,0.456c0,0.144-0.048,0.312-0.48,0.504L1.488,11.161z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Lt" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
