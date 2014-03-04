/**
 * “连续点”表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        DotsOperator = require( "operator/binary-opr/dots" ),
        TYPES = {
            "cdots": 1,
            "ldots": 1,
            "vdots": 1,
            "ddots": 1
        };

    return kity.createClass( 'DotsExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( type, leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.type = type in TYPES ? type : "cdots";

            this.setOperator( new DotsOperator() );

        },

        setType: function ( type ) {

            if ( type in TYPES ) {
                this.type = type;
            }

        }

    } );

} );
