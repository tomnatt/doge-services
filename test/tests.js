module("Accordion");
test("It only shows the first paragraph at first", function() {
  initAccordion();
  equal($(".accordion").find("p:visible").length, 1);
});

asyncTest("It changes when you click", function() {
  initAccordion();
  expect(1);
  $(".accordion").find("h3").eq(2).trigger("click");

  setTimeout(function() {
    ok($(".accordion").find("p").eq(2).is(":visible"));
    start();
  }, 800);
});

