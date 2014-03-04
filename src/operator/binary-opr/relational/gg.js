/**
 * 远大于操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'GgOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.624,18.722c-0.168,0-0.624,0-0.624-0.48c0-0.264,0.192-0.36,0.48-0.528l12.049-6.577L0.48,4.561   C0.192,4.393,0,4.296,0,4.033c0-0.336,0.264-0.48,0.48-0.48c0.168,0,0.336,0.096,0.432,0.144l12.649,6.913   c0.288,0.168,0.456,0.24,0.456,0.528s-0.168,0.36-0.456,0.528L0.624,18.722z M7.944,18.722c-0.168,0-0.624,0-0.624-0.48   c0-0.264,0.192-0.36,0.48-0.528l12.049-6.577L7.8,4.561C7.513,4.393,7.32,4.296,7.32,4.033c0-0.336,0.264-0.48,0.48-0.48   c0.168,0,0.336,0.096,0.432,0.144l12.649,6.913c0.288,0.168,0.456,0.24,0.456,0.528s-0.168,0.36-0.456,0.528L7.944,18.722z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Gg" );

            opShape.translate( 2.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
