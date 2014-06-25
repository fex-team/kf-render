/**
 * 求和操作符：∑
 */

define( function ( require ) {

    var kity = require( "kity" ),
        ScriptController = require( "operator/common/script-controller" );

    return kity.createClass( 'SummationOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( "Summation" );

            this.displayType = "equation";

        },

        applyOperand: function ( expr, sup, sub ) {

            var opShape = this.getOperatorShape(),
                expBox = expr.getFixRenderBox(),
                padding = 0,
                space = new ScriptController( this, opShape, sup, sub ).applyUpDown(),
                diff = ( space.height - space.top - space.bottom - expBox.height ) / 2;

            if ( diff >= 0 ) {
                expr.translate( space.width + padding, diff + space.bottom );
            } else {
                diff = -diff;
                opShape.translate( 0, diff );
                sup.translate( 0, diff );
                sub.translate( 0, diff );
                expr.translate( space.width + padding, space.bottom );
            }

            this.parentExpression.setOffset( space.top, space.bottom );
            this.parentExpression.expand( padding, padding * 2 );
            this.parentExpression.translateElement( padding, padding );

        },

        getOperatorShape : function () {

            var pathData = "M0.672,33.603c-0.432,0-0.648,0-0.648-0.264c0-0.024,0-0.144,0.24-0.432l12.433-14.569L0,0.96c0-0.264,0-0.72,0.024-0.792   C0.096,0.024,0.12,0,0.672,0h28.371l2.904,6.745h-0.6C30.531,4.8,28.898,3.72,28.298,3.336c-1.896-1.2-3.984-1.608-5.28-1.8   c-0.216-0.048-2.4-0.384-5.617-0.384H4.248l11.185,15.289c0.168,0.24,0.168,0.312,0.168,0.36c0,0.12-0.048,0.192-0.216,0.384   L3.168,31.515h14.474c4.608,0,6.96-0.624,7.464-0.744c2.76-0.72,5.305-2.352,6.241-4.848h0.6l-2.904,7.681H0.672z",
                operatorShape = new kity.Path( pathData ).fill( "black" ),
                opBgShape = new kity.Rect( 0, 0, 0, 0 ).fill( "transparent" ),
                group = new kity.Group(),
                opRenderBox = null;

            group.addShape( opBgShape );
            group.addShape( operatorShape );

            operatorShape.scale( 1.6 );

            this.addOperatorShape( group );

            opRenderBox = operatorShape.getFixRenderBox();

            if ( this.displayType === "inline" ) {
                operatorShape.translate( 5, 15 );
                opBgShape.setSize( opRenderBox.width + 10, opRenderBox.height + 25 );
            } else {
                operatorShape.translate( 2, 5 );
                opBgShape.setSize( opRenderBox.width + 4, opRenderBox.height + 8 );
            }

            return group;

        }

    } );

} );

