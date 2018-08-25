$(document).ready(function(){
    $("#login-form").hide();
    $("#login").click(function(){
        $("#signup-form").toggle();
        $("#login-form").fadeIn("slow");
    })
    
    $("#sign-up").click(function(){
        $("#login-form").toggle();
        $("#signup-form").fadeIn("slow");
    })
})