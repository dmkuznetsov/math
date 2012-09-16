/**
 * @description pages/index/main
 */
define( [
    "jquery"
    , 'repo/timer/main'
    , 'repo/test/main'
    , 'text!./templates/levels.html'

    , 'underscore'
], function( $, timerInstance, testInstance, tplLevels ) {
    var level = 0, timer, test, $btnStart, $btnBack, $gameField, $gameLevels;

    function init() {
        updateVars();
        bindEvents();

        checkHash();
    };

    function updateVars() {
        timer = new timerInstance();
        test = new testInstance( 0 );
        test.setLimitFunc( stopGame );

        $btnStart = $( '.math > .start' );
        $btnBack = $( '.math > .back' );
        $gameField = $( '.math > .field' );
        $gameLevels = $( '.math > .levels' );
        $gameLevels.html( _.template( tplLevels, { 'levels': test.levels } ) );
    };

    function bindEvents() {
        $btnStart.live( 'click', startGame );

        $btnBack.live( 'click', function() {
            level = 0;
            $gameField.empty();
            $gameLevels.show();
            $btnStart.hide();
            $btnBack.hide();
        } );

        $gameLevels.find( '.choose-level' ).live( 'click', function() {
            level = $(this).data( 'level' );
            $gameField.empty();
            $gameLevels.hide();
            $btnStart.show();
            $btnBack.show();
        } );

        $gameField.find( '.math-test-answer:last' ).live( 'keyup', function() {
            var $curTest = $(this).parents( '.math-test' );

            if ( test.check( $(this).val() ) ) {
                $(this).attr( 'disabled', 'disabled' );
                $curTest.find( '.math-test-time' ).html( timer.temp() / 1000 + ' sec.' );
                drawTest();
            };
        } );
    };

    function checkHash() {
        var hash = document.location.hash.substr( 1 )
            , result = /^level\-([0-9]+)/.exec( hash );
        if( result ) {
            $gameLevels.find( '.choose-level:eq('+result[ 1 ]+')' ).trigger( 'click' );
        };
    };

    function startGame() {
        test = new testInstance( level );
        test.setLimitFunc( stopGame );
        $gameField.empty();
        timer.start();
        drawTest();
    };

    function stopGame() {
        timer.stop();
//        $btnStart.removeAttr( 'disabled' );
        $gameField.find( '.math-test' ).addClass( 'success' );
        $gameField.find( '.math-test-answer' ).attr( 'disabled', 'disabled' );

        $gameField.append( '<h3>You time: '+(timer.result()/1000).toFixed(1)+' sec.</h3>' );
        $gameField.append( '<h3>Average time: '+(timer.getAverage()/1000).toFixed(1)+' sec.</h3>' );
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