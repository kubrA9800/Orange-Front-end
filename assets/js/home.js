"use strict"

$(function () {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });




  let products = document.querySelectorAll(".product")

  products.forEach(productImage => {
    productImage.addEventListener("mouseover", function () {
      this.children[1].classList.remove("d-none")
    })

  })

  products.forEach(productImage => {
    productImage.addEventListener("mouseout", function () {
      this.children[1].classList.add("d-none")
    })

  })



  products.forEach(productIcon => {
    productIcon.addEventListener("mouseover", function () {
      this.children[2].classList.remove("d-none")
    })

  })

  products.forEach(productIcon => {
    productIcon.addEventListener("mouseout", function () {
      this.children[2].classList.add("d-none")
    })

  })


  let heartIcons = document.querySelectorAll(".product .icons .heart-icon");
  
  heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener("click", function () {

      this.nextElementSibling.classList.remove("d-none")

      this.nextElementSibling.addEventListener("click", function () {
        this.classList.add("d-none")
      })

    })

  });

})