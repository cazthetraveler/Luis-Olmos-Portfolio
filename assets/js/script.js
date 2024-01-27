const nav = $("nav")
const navBtn = $("#nav-btn");
const navClose = $("#nav-close");
const nameDiv = $("#name");
const header = $("header");
const social = $(".social");

let windowWidth = $(window).width();

// if (windowWidth < 600) {
//     navBtn.on("click", function() {
//         header.css("flex-direction", "column");
//         header.css("text-align", "center");
//         header.css("height", "100vh");
//         header.css("justify-content", "flex-start");
//         nav.css("display", "block");
//         nav.children().children().css("display", "block");
//         nameDiv.css("display", "none");
//         $(this).css("display", "none");
//         navClose.css("display", "block");
//         social.css("display", "block");
//     });
    
//     navClose.on("click", function() {
//         header.css("flex-direction", "row");
//         header.css("height", "auto");
//         header.css("justify-content", "space-between");
//         nav.css("display", "none");
//         nameDiv.css("display", "block");
//         $(this).css("display", "none");
//         navBtn.css("display", "block");
//         social.css("display", "none");
//     });
    
//     nav.children().children().on("click", function() {
//         header.css("flex-direction", "row");
//         header.css("height", "auto");
//         header.css("justify-content", "space-between");
//         nav.css("display", "none");
//         nameDiv.css("display", "block");
//         navClose.css("display", "none");
//         navBtn.css("display", "block");
//         social.css("display", "none");
//     });
// } else {
//     nav.children().children().on("click", function() {
//         header.css("flex-direction", "row");
//         header.css("height", "auto");
//         header.css("justify-content", "space-between");
//         nav.css("display", "block");
//         nameDiv.css("display", "block");
//         navClose.css("display", "none");
//         navBtn.css("display", "none");
//         social.css("display", "block");
//     });

//     // nav.css("display", "flex");
//     // nav.css("flex-direction", "row");
//     // nav.children().children().css("display", "inline");
//     // social.css("display", "block");
// };

navBtn.on("click", function() {
    header.css("flex-direction", "column");
    header.css("text-align", "center");
    header.css("height", "100vh");
    header.css("justify-content", "flex-start");
    nav.css("display", "block");
    nav.children().children().css("display", "block");
    nameDiv.css("display", "none");
    $(this).css("display", "none");
    navClose.css("display", "block");
    social.css("display", "block");
    $("body").css("overflow", "hidden");
});

navClose.on("click", function() {
    header.css("flex-direction", "row");
    header.css("height", "auto");
    header.css("justify-content", "space-between");
    nav.css("display", "none");
    nameDiv.css("display", "block");
    $(this).css("display", "none");
    navBtn.css("display", "block");
    social.css("display", "none");
    $("body").css("overflow", "visible");
});

nav.children().children().on("click", function() {
    // hide this only for smaller screens
    if ($(window).width() <= 600) {
        nav.css("display", "none");
        social.css("display", "none");
    } else {
        social.css("display", "block");
        nav.css("display", "block");
    }
    header.css("flex-direction", "row");
    header.css("height", "auto");
    header.css("justify-content", "space-between");
    nameDiv.css("display", "block");
    navClose.css("display", "none");
    navBtn.css("display", "block");
    $("body").css("overflow", "visible");
});