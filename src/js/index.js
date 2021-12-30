import "../styles/style.css"
const fixedHeader = require("./functions/fixedScroll")
const smoothScroll = require("./functions/smoothScroll")

$(function () {
  // Фиксированный скролл
  fixedHeader()
  // Плавный скролл
  smoothScroll()
})