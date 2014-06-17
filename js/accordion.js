window.initAccordion = function() {
  var accordion = $(".accordion");

  var paras = accordion.find("p");
  paras.not(":first").hide();

  accordion.on("click", "h3", function() {
    var h3 = $(this);
    if(h3.next("p").is(":visible")) {
      return;
    }
    paras.slideUp("slow");

    paras.promise().done(function() {
      h3.next("p").slideDown();
    });
  });
};

$(initAccordion);
