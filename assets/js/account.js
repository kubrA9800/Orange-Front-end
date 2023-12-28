"use strict"

let inputs=document.querySelectorAll(".input input")
 inputs.forEach(input=>{
    input.onfocus=function(){
        this.previousElementSibling.style.top="-14px"
        this.previousElementSibling.style.fontSize="14px"
    }
 })

 inputs.forEach(input=>{
    input.onblur=function(){
        this.previousElementSibling.style.top="5px"
        this.previousElementSibling.style.fontSize="16px"
    }
 })