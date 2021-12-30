const header = $("#header")
const intro = $("#intro")

let introHeight
let scrollPos = $(window).scrollTop()

const fixedHeader = () => {
  $(window).on("scroll load resize", function () {
    introHeight = intro.innerHeight()
    scrollPos = $(this).scrollTop()

    if (scrollPos > introHeight) {
      header.addClass("fixed")
    } else {
      header.removeClass("fixed")
    }
  })
}

module.exports = fixedHeader;