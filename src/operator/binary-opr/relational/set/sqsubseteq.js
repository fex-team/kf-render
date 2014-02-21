/**
 * "⊑"操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'SqsubseteqOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.84,20.426c-0.408,0-0.84,0-0.84-0.48s0.48-0.48,0.864-0.48h13.417c0.36,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48   H0.84z M1.224,2.833V14.81h13.057c0.408,0,0.864,0,0.864,0.48s-0.432,0.48-0.84,0.48H1.104c-0.768,0-0.84-0.072-0.84-0.864V2.736   c0-0.768,0.096-0.864,0.864-0.864h13.177c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H1.224z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Sqsubseteq" );

            opShape.translate( 5.5, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
