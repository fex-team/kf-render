/**
 * 小括号操作符：()
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SYMBOL_DATA = require( "char/data" );

    return kity.createClass( 'BracketsOperator', {

        base: require( "operator/operator" ),

        constructor: function () {

            this.callBase( "Brackets" );

        },

        applyOperand: function ( leftBrackets, rightBrackets, exp ) {

            generate.call( this, leftBrackets, rightBrackets, exp );

        }

    } );

    function generate ( left, right, exp ) {

        debugger;
        var leftPath = SYMBOL_DATA[ left ],
            rightPath = SYMBOL_DATA[ right ],
            group = new kity.Group(),
            leftOp = new kity.Path( leftPath ).fill( "black" ),
            rightOp = new kity.Path( rightPath ).fill( "black" ),
            expSpaceSize = exp.getRenderBox(),
            opShapeSize = null,
            zoom = 1,
            offset = 0;

        this.addOperatorShape( group.addShape( leftOp ).addShape( rightOp ) );

        opShapeSize = leftOp.getRenderBox();

        zoom = expSpaceSize.height / opShapeSize.height;

        leftOp.setAnchor( 0, 0 ).scale( zoom );
        rightOp.setAnchor( 0, 0 ).scale( zoom );

        opShapeSize = leftOp.getRenderBox();

        rightOp.translate( opShapeSize.width + expSpaceSize.width + 4, 0 );
        exp.translate( opShapeSize.width + 2, 0 );

    }

} );
