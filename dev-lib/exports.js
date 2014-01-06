/**
 * 模块暴露
 */

( function ( global ) {

    define( 'kf.start', function ( require ) {

        global.kf = {

            // base
            Formula: require( "formula" ),

            // expression
            TextExpression: require( "expression/text" ),
            CombinationExpression: require( "expression/compound-exp/combination" ),
            AdditionExpression: require( "expression/compound-exp/binary-exp/addition" ),
            AsteriskExpression: require( "expression/compound-exp/binary-exp/asterisk" ),
            DivisionExpression: require( "expression/compound-exp/binary-exp/division" ),
            DotExpression: require( "expression/compound-exp/binary-exp/dot" ),
            EqualExpression: require( "expression/compound-exp/binary-exp/equal" ),
            FractionExpression: require( "expression/compound-exp/binary-exp/fraction" ),
            IntersectionExpression: require( "expression/compound-exp/binary-exp/intersection" ),
            LogicAndExpression: require( "expression/compound-exp/binary-exp/logic-and" ),
            MultiplicationExpression: require( "expression/compound-exp/binary-exp/multiplication" ),
            RadicalExpression: require( "expression/compound-exp/binary-exp/radical" ),
            SubExpression: require( "expression/compound-exp/binary-exp/subscript" ),
            SuperscriptExpression: require( "expression/compound-exp/binary-exp/superscript" ),
            SubtractionExpression: require( "expression/compound-exp/binary-exp/subtraction" ),
            SummationExpression: require( "expression/compound-exp/binary-exp/summation" ),
            UnionExpression: require( "expression/compound-exp/binary-exp/union" ),
            IntegrationExpression: require( "expression/compound-exp/binary-exp/integration" )

        };

    } );

    // build环境中才含有use
    try {
        use( 'kf.start' );
    } catch ( e ) {
    }

} )( this );
