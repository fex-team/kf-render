/**
 * 小括号操作符：()
 */

define( function ( require ) {

    var kity = require( "kity" ),
        Text = require( "char/text" );

    return kity.createClass( 'BracketsOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( "Brackets" );

        },

        applyOperand: function ( exp ) {

            generate.call( this, exp );

        }

    } );

    function generate ( exp ) {

        var left = this.getParentExpression().getLeftSymbol(),
            right = this.getParentExpression().getRightSymbol(),
            fontSize = exp.getFixRenderBox().height,
            group = new kity.Group(),
            offset = 0,
            leftOp = new Text( left, "KF AMS MAIN" ).fill( "black" ),
            rightOp = new Text( right, "KF AMS MAIN" ).fill( "black" );

        leftOp.setFontSize( fontSize );
        rightOp.setFontSize( fontSize );

        this.addOperatorShape( group.addShape( leftOp ).addShape( rightOp ) );

        offset += leftOp.getFixRenderBox().width;
        exp.translate( offset, 0 );
        offset += exp.getFixRenderBox().width;
        rightOp.translate( offset, 0 );

    }

} );
