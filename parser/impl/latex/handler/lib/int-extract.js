/**
 * 积分参数提取函数
 */

define( function ( require, exports, module ) {

    return function ( units ) {

        var sup = units.shift() || null,
            sub = null,
            exp = null;

        if ( sup !== null  ) {

            if ( typeof sup === "string" ) {
                exp = sup;
                sup = null;
            } else {

                if ( sup.name === "superscript" ) {
                    sup = units.shift() || null;

                    if ( sup ) {

                        sub = units.shift() || null;

                        if ( sub ) {

                            if ( sub.name === "subscript" ) {
                                sub = units.shift() || null;
                                exp = units.shift() || null;
                            } else {
                                exp = sub;
                                sub = null;
                            }

                        }

                    }

                } else if ( sup.name === "subscript" ) {

                    sub = units.shift() || null;

                    if ( sub ) {

                        sup = units.shift() || null;

                        if ( sup ) {

                            if ( sup.name === "superscript" ) {
                                sup = units.shift() || null;
                                exp = units.shift() || null;
                            } else {
                                exp = sup;
                                sup = null;
                            }

                        }

                    }

                } else {
                    exp = sup;
                    sup = null;
                }

            }

        }

        return {
            sub: sub,
            sup: sup,
            exp: exp
        };

    };

} );
