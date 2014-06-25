/*!
 * 启动代码
 */

define( 'kf.start', function ( require ) {

    window.kf = {

        // base
        ResourceManager: require( "resource-manager" ),
        Operator: require( "operator/operator" ),

        // expression
        Expression: require( "expression/expression" ),
        CompoundExpression: require( "expression/compound" ),
        TextExpression: require( "expression/text" ),
        EmptyExpression: require( "expression/empty" ),
        CombinationExpression: require( "expression/compound-exp/combination" ),
        FunctionExpression: require( "expression/compound-exp/func" ),

        FractionExpression: require( "expression/compound-exp/fraction" ),
        IntegrationExpression: require( "expression/compound-exp/integration" ),
        RadicalExpression: require( "expression/compound-exp/radical" ),
        ScriptExpression: require( "expression/compound-exp/script" ),
        SuperscriptExpression: require( "expression/compound-exp/binary-exp/superscript" ),
        SubscriptExpression: require( "expression/compound-exp/binary-exp/subscript" ),
        SummationExpression: require( "expression/compound-exp/summation" ),

        // Brackets expressoin
        BracketsExpression: require( "expression/compound-exp/brackets" )

    };

} );