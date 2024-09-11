jQuery(function($) {
    $( ".tombols" ).click(function() {
        $("#searchform").toggle();
        $(".tombols").toggleClass( "collapsed" );
    });
});