/**
 * @description repo/test/levels
 */
define( function() {
    return {
        0: {
            'chars': 2
            , 'operations': [ '+' ]
            , 'limit': [ 1, 50 ]
            , 'count': 7
        },
        1: {
            'chars': 2
            , 'operations': [ '+' ]
            , 'limit': [ 100, 500 ]
            , 'count': 7
        },
        2: {
            'chars': 2
            , 'operations': [ '+' ]
            , 'limit': [ 1000, 5000 ]
            , 'count': 7
        },
        3: {
            'chars': 2
            , 'operations': [ '-' ]
            , 'limit': [ 1, 50 ]
            , 'count': 7
        },
        4: {
            'chars': 2
            , 'operations': [ '-' ]
            , 'limit': [ 100, 500 ]
            , 'count': 7
        },
        5: {
            'chars': 2
            , 'operations': [ '-' ]
            , 'limit': [ 1000, 5000 ]
            , 'count': 7
        },
        6: {
            'chars': 2
            , 'operations': [ '-', '+' ]
            , 'limit': [ 1, 50 ]
            , 'count': 7
        },
        7: {
            'chars': 2
            , 'operations': [ '-', '+' ]
            , 'limit': [ 100, 500 ]
            , 'count': 7
        },
        8: {
            'chars': 2
            , 'operations': [ '-', '+' ]
            , 'limit': [ 1000, 5000 ]
            , 'count': 7
        }
    };
});