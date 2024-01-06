"use strict"

$(function () {



  let products = document.querySelectorAll(".product")

  products.forEach(productImage => {
    productImage.addEventListener("mouseover", function () {
      this.children[0].children[1].classList.remove("d-none")
    })

  })

  products.forEach(productImage => {
    productImage.addEventListener("mouseout", function () {
      this.children[0].children[1].classList.add("d-none")
    })

  })



  products.forEach(productIcon => {
    productIcon.addEventListener("mouseover", function () {
      this.children[1].classList.remove("d-none")
    })

  })

  products.forEach(productIcon => {
    productIcon.addEventListener("mouseout", function () {
      this.children[1].classList.add("d-none")
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


  let openSidebarIcon = document.querySelector(".header-all .hamburger-icon")
  let sidebar = document.querySelector(".sidebar")
  let closeSidebarIcon = document.querySelector(".sidebar .close-icon")
  let overlay = document.querySelector(".overlay")

  openSidebarIcon.addEventListener("click", function () {
    sidebar.classList.remove("move-sidebar")
    overlay.style.display = "block";

  })

  closeSidebarIcon.addEventListener("click", function () {
    sidebar.classList.add("move-sidebar")
    overlay.style.display = "none"
  })

  overlay.addEventListener("click", function(){
    sidebar.classList.add("move-sidebar")
    this.style.display = "none";
    seacrhSidebar.classList.add("move-sidebar")
    modal.classList.add("d-none")
    cartSidebar.classList.add("move-sidebar")

})


  let seacrhSidebar=document.querySelector(".search-sidebar")
  let searchIcon=document.querySelector(".icons .search-icon")
  let closeSearchIcon=document.querySelector(".search-sidebar .fa-xmark")
  searchIcon.addEventListener("click", function () {
    seacrhSidebar.classList.remove("move-sidebar")
    overlay.style.display = "block";

  })
  closeSearchIcon.addEventListener("click", function () {
    seacrhSidebar.classList.add("move-sidebar")
    overlay.style.display = "none"
  })


  let eyeIcons=document.querySelectorAll(".product .icons .fa-eye")
  let modal=document.querySelector(".modals")
  
      eyeIcons.forEach(eyeIcon=>{
        eyeIcon.addEventListener("click", function(){
          modal.classList.remove("d-none")
          overlay.style.display = "block";
        })
      })

  let closeModalIcon=document.querySelector(".modals .close")
  closeModalIcon.addEventListener("click",function(){
    modal.classList.add("d-none")
          overlay.style.display = "none";
  })

  let basketIcon=document.querySelector("header .basket")
  let cartSidebar=document.querySelector(".cart-sidebar")
  let closeCartSidebar=document.querySelector(".cart-sidebar .close-icon")

  basketIcon.addEventListener("click", function(){
    console.log("fyguyhj");
    cartSidebar.classList.remove("move-sidebar")
    overlay.style.display = "block";
  })
  closeCartSidebar.addEventListener("click", function () {
    cartSidebar.classList.add("move-sidebar")
    overlay.style.display = "none"
  })
  
})