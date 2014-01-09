/**
 * 逻辑或操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        pathData = "M42.484,1.368L20.306,53.141L0,1.368l2.88-1.224l17.642,44.572L39.604,0L42.484,1.368z";

    return kity.createClass( 'LogicalDisjunctionOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var shape = null;

            this.callBase( "LogicalDisjunction" );


            shape = new kity.Path( pathData ).fill( "black" );
            this.operatorShape.translate( 0, -5 );

            // 绘制符号图形
            this.addOperatorShape( shape );

        }

    } );

} );
