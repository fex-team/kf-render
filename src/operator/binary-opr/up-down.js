/**
 * 上下结合二元操作符
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'UpDownOperator', {

        base: require( "operator/binary" ),

        applyOperand: function ( upOperand, downOperand ) {

            throw new Error( 'applyOperand is abstract' );

        }

    } );

} );
