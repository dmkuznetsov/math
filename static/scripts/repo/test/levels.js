/**
 * @description repo/test/levels
 */
define( function() {
    return {
        0: {
            'chars': 2
            , 'operations': [ '+' ]
            , 'fraction': false
            , 'limit': [ 1, 50 ]
            , 'count': 5
        },
        1: {
            'chars': 2
            , 'operations': [ '-' ]
            , 'fraction': false
            , 'limit': [ 1, 50 ]
            , 'count': 5
        },
        2: {
            'chars': 2
            , 'operations': [ '+', '-' ]
            , 'fraction': false
            , 'limit': [ 1, 50 ]
            , 'count': 5
        }
    };
});