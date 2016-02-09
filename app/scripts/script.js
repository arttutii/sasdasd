angular.module('theApp', [])

$(document).ready(function () {
    // Hide some things

    $('#logoutbtn').hide();

    // Click functions

    $("#uploadbtn").click(function () {
        $("#uploadModal").modal();
    });
    $("#loginbtn").click(function () {
        $("#loginModal").modal();
    });
    $("#logoutbtn").click(function () {
        localStorage.clear();
        location.reload();
    });
    $("#regislink").click(function () {
        $('.registration').fadeIn();
        $('.login').hide();
    });
    $("#loginlink").click(function () {
        $('.registration').hide();
        $('.login').fadeIn();
    });

    $(".loginputs").keyup(function(event){
    if(event.keyCode == 13){
        console.log("weqwe");
        $("#signinbtn").click();
    }
    });


    // Check if user is logged in

    if (localStorage.getItem("userID") != null) {
        $('#loggedin').append('logged in as: ' + localStorage.getItem("username"));
        $('#loginbtn').hide();
        $('#logoutbtn').show();
        console.log("user logged in");
    } else {
        console.log("user not logged in");
    }



    /* variable for nightmode button*/
    var clicked = false;

    $('#modebtn').click(function () {
        if (clicked == false) {
            $('#navi').attr("class", "navbar navbar-default navbar-fixed-top ");
            $("body").css("background-color", "white");
            $('#contentArea').css("background-color", "#ebebeb");
            $('#contentArea').css("color", "black");
            $('#modebtn').css("color", "#888888");
            $('#contents').css("background-color", "#ebebeb");
            $('#contentsrow').css("background-color", "#ebebeb");
            $('#contents').css("color", "black");
            $('#thePage').css("background-color", "white");
            clicked = true;
        } else {
            $('#navi').attr("class", "navbar navbar-default navbar-inverse navbar-fixed-top ");
            $('body').css("background-color", "#222222");
            $('#contentArea').css("background-color", "#383838");
            $('#contentArea').css("color", "white");
            $('#modebtn').css("color", "white");
            $('#contents').css("background-color", "#383838");
            $('#contentsrow').css("background-color", "#383838");
            $('#contents').css("color", "white");
            $('#thePage').css("background-color", "#222222");
            clicked = false;
        }

    });
    // Get all the users from database
    $.getUsers();
    /* Executing show images*/
    $.showImages();


});