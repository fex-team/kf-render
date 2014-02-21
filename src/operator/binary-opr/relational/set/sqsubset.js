/**
 * "⊏"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SqsubsetOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.96,5.161v11.977h12.841c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H0.84c-0.768,0-0.84-0.096-0.84-0.84V5.064   c0-0.792,0.096-0.864,0.864-0.864h12.961c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.96z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Sqsubset" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
