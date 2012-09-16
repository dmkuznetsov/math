requirejs.config({
    baseUrl: 'static/scripts'
});
require( [ "jquery" ], function( $ ) {
    $(function() {
        require( [ 'pages/' + $( 'body').data( "page" ) + '/main' ], function( page ){
            page.init();
        } );
    });
});