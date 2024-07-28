 
 var overlay=document.querySelector(".overlay")
var pluspop=document.querySelector(".pluspop")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    pluspop.style.display="block"
    
})
var cancel=document.getElementById("cancel-popup")

cancel.addEventListener("click",function(event){
  event.preventDefault()
  overlay.style.display="block"
    pluspop.style.display="block"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
     event.preventDefault()
     overlay.style.display="none"
    pluspop.style.display="none"

    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h4>${bookauthorinput.value}</h4>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
})

function deletebook(event){
    
    event.target.parentElement.remove()
}

    
    
    
      
    


