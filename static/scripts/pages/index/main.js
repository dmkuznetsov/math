/**
 * @description pages/index/main
 */
define( [
    "jquery"
    , 'repo/timer/main'
    , 'repo/test/main'
], function( $, timerInstance, testInstance ) {
    var timer, test, $btnStart, $gameField;

    function init() {
        updateVars();
        bindEvents();
    };

    function updateVars() {
        timer = new timerInstance();

        $btnStart = $( '.math > .start' );
        $gameField = $( '.math > .field' );
    };

    function bindEvents() {
        $btnStart.click( startGame );
        $gameField.find( '.math-test-answer:last' ).live( 'keyup', function() {
            var $curTest = $(this).parents( '.math-test' );

            if ( test.check( $(this).val() ) ) {
                $(this).attr( 'disabled', 'disabled' );
                $curTest.find( '.math-test-time' ).html( timer.temp() / 1000 + ' sec.' );
                drawTest();
            };
        } );
    };

    function startGame( event ) {
        var variant = 0;
        if( $(event.target).hasClass( 'minus' ) ) {
            variant = 1;
        } else if( $(event.target).hasClass( 'mixed' ) ) {
            variant = 2;
        };
        test = new testInstance(variant);
        test.setLimitFunc( stopGame );
        $gameField.empty();
//        $btnStart.attr( 'disabled', 'disabled' );
        timer.start();
        drawTest();
    };

    function stopGame() {
        timer.stop();
//        $btnStart.removeAttr( 'disabled' );
        $gameField.find( '.math-test' ).addClass( 'success' );
        $gameField.find( '.math-test-answer' ).attr( 'disabled', 'disabled' );

        $gameField.append( '<h3>You time: '+timer.result()/1000+' sec.</h3>' );
        $gameField.append( '<h3>Average time: '+timer.getAverage()/1000+' sec.</h3>' );
        timer.clear();
        test = new testInstance(0);
        test.setLimitFunc( stopGame );
    };

    function drawTest() {
        $gameField.append( test.generate() );
        $gameField.find( '.math-test').addClass( 'success' );
        $gameField.find( '.math-test:last').removeClass( 'success' );
        $gameField.find( '.math-test-answer:last').focus();
    };

    return {
        init: init
    };
});