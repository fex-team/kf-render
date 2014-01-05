/**
 * 逻辑与（交运算）操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M42.556,50.404l-2.88,1.152L22.754,8.425L2.808,51.557L0,50.116L22.97,0L42.556,50.404z";

    return kity.createClass( 'LogicAndOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "LogicAnd" );

            shape = new kity.Path( pathData ).fill( "black" );
            shape.translate( 9, 5 );

            // 绘制符号图形
            this.addOperatorShape( shape );
            this.setBoxSize( 60, 70 );

        }

    } );

} );
