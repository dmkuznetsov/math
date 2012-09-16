/**
 * @description repo/test/main
 */
define( [
    './levels'
    , 'text!./templates/test.html'

    , 'underscore'
], function( levels, tplCase ) {
    return function( level ) {
        var _s = {}
            , _result = 0
            , _count = 0
            , _limitFunc;

        function init() {
            _s = levels[ level || 0 ] || levels[ 0 ];
        };

        function generate() {
            _result = 0;

            if ( limit() ) {
                return false;
            };

            var expression = '';
            for( var i = 0; i < _s.chars; i++ ) {
                var number = Math.floor( ( Math.random() * _s.limit[ 1 ] ) + _s.limit[ 0 ] )
                    , operation = '';
                if ( _s.fraction ) {
                    number += Math.random().toFixed(1);
                };
                if ( i != _s.chars - 1 ) {
                    operation = _s.operations[ Math.floor( ( Math.random() * _s.operations.length ) ) ];
                };
                expression += ( number + operation );
            };
            _result = eval( expression );
            _result.toFixed(1);
            _count++;

            return _.template( tplCase, {
                'expression': expression
                , 'id': Math.floor( ( Math.random() * 999999 ) + 1 )
            } );
        };

        function check( answer ) {
            return answer == _result;
        };

        function limit() {
            if ( _s.count == _count ) {
                _limitFunc();
                return true;
            };
            return false;
        };

        function setLimitFunc( func ) {
            _limitFunc = func;
        };

        init();
        return {
            generate: generate
            , check: check
            , setLimitFunc: setLimitFunc
            , levels: levels
        };
    };
});