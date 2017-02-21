var rm = $(".read_more"),
  moreText = "See less",
  lessText = "Read more";

// slide toggle on more or less text
rm.click(function() {
  var $this = $(this);
  $this.prev().slideToggle();
  $this.text($this.text() == moreText ? lessText : moreText);
});


$(window).resize(function() {
  if ($(window).width() > 768) {
          $('.hiddentext').removeClass('hiddentext');
     }
  else{}
});
