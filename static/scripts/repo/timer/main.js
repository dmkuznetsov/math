/**
 * @description repo/timer/main
 */
define( function() {
    return function() {
        var _timer = 0, _interval = 50, _progress = false, _result = 0, _temp = 0, _average = [];

        function start() {
            _progress = true;
            timer();
        };

        function temp()
        {
            var time = _timer - _temp;
            _temp = _timer;
            _average.push( time );
            return time;
        }

        function stop() {
            _result = _timer;
            _progress = false;
        };

        function result() {
            return _result;
        };

        function getAverage() {
            var sum = 0;
            for( var i = 0; i < _average.length; i++ ) {
                sum += _average[ i ];
            };

            return sum / _average.length;
        };


        function clear() {
            if ( _timer ) {
                _result = _timer;
                _average = [];
                _temp = 0;
            };
            _timer = 0;
        };

        function timer() {
            if ( _progress ) {
                _timer += _interval;
                setTimeout( timer, _interval );
            };
        };

        return {
            start: start
            , stop: stop
            , temp: temp
            , getAverage: getAverage
            , result: result
            , clear: clear
        };
    };
});