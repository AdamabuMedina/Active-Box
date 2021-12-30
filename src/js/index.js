import "../styles/style.css"
const fixedHeader = require("./functions/fixedScroll")
const smoothScroll = require("./functions/smoothScroll")
const burgerMenu = require("./functions/burgerMenu")

const nav = $("#nav")

$(function () {
  // Фиксированный скролл
  fixedHeader()
  // Плавный скролл
  smoothScroll(nav)
  // Бургер меню
  burgerMenu(nav)
})