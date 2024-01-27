const photoBtn = $(".photo-grid").children();
const closeBtn = $("#close-modal-button");
const modal = $("#photo-modal");
const image = $("#modal-image");

photoBtn.on("click", function() {
    console.log($(this).attr("src"));
    modal.css("display", "block");
    image.attr("src", $(this).attr("src"));
    $("body").css("overflow", "hidden");
});

closeBtn.on("click", function() {
    modal.css("display", "none");
    $("body").css("overflow", "visible");
});