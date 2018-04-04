// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true,
    domCache: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


$("li.nav nav-list > a").click( function (event) {
    var nextSibling = $(this).next();
    nextSibling.toggleClass("dropped");  
    $('.dropped').not(nextSibling).removeClass('dropped');
});

