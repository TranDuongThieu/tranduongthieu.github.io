

function dropdown(){
    var getAttribute = document.querySelector(".dropdown-content")
    getAttribute.style.display ="block"
    
}
function deleteDropdown(){
    var getAttribute = document.querySelector(".dropdown-content")
    getAttribute.style.display ="none"
}

var index=0

setInterval(function(){
    var imgs=["./img/slider/chicago.jpg","./img/slider/la.jpg","./img/slider/ny.jpg"]
    var h3=["Chicago","Los Angeles","New York"]
    var p=["Thank you, Chicago - A night we won't forget.",
            "We had the best time playing at Venice Beach!",
            "The atmosphere in New York is lorem ipsum."]
    document.querySelector("#slider>img").src=imgs[index]
    document.querySelector("#slogan>h3").innerHTML=h3[index]
    document.querySelector("#slogan>p").innerHTML=p[index]
    index=index+1
    if (index==3)
        index=0
},3000)

function showTicketsform(){
    var ticketsForm=document.querySelector("#form-tickets")
    var shadow=document.querySelector(".shadow")
    ticketsForm.style.display="block"
    shadow.style.display='block'
}
function closeTicketsform(){
    var ticketsForm=document.querySelector("#form-tickets")
    var shadow=document.querySelector(".shadow")
    ticketsForm.style.display="none"
    shadow.style.display='none'
}
var check=true;
function addDropdownphone(){
    var phoneDropdown=document.querySelector(".phone-dropdown")
    if (check==true){
        phoneDropdown.style.display="block"
        console.log(check)
        check=false
    }
    else{
        phoneDropdown.style.display="none"
        console.log(check)
        check=true  
    }
}

var stopClosetickets=document.querySelector(".stopCloseticketsform")
stopClosetickets.addEventListener('click',function(event){
    event.stopPropagation()
})

