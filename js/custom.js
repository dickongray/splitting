var rm = $(".read_more"),
  moreText = "- READ SOME MORE",
  lessText = "- READ LESS";

// slide toggle on more or less text
rm.click(function() {
  var $this = $(this);
  $this.prev().slideToggle();
  $this.text($this.text() == moreText ? lessText : moreText);
});