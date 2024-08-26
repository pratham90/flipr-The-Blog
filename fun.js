const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-1 '),
    smooth: true
});

// console.log("hello")
let btn = document.querySelector(".checkbox");
let body = document.querySelector("body");
let newbtn = "light";

btn.addEventListener("click", () => {
    console.log(newbtn)
    if (newbtn === "light") {
        newbtn = "dark";
        body.classList.add("light");
        body.classList.remove("dark");
        console.log(newbtn)
        document.querySelector(".anchor").style.color="white";
        document.querySelector(".anchor2").style.color="white";
        document.querySelector(".anchor3").style.color="white";
        document.querySelector(".anchor4").style.color="white";
        document.querySelector(".anchor1").style.color="white";
        document.querySelector(".anchor5").style.color="white";
        document.querySelector(".anchor6").style.color="white";
        document.querySelector(".anchor7").style.color="white";
        document.querySelector(".anchor8").style.color="white";
        document.querySelector(".anchor9").style.color="white";
     
    }
   
    else if(newbtn === "dark"){
        
        newbtn = "light";
        body.classList.add("dark");
        body.classList.remove("light");
        document.querySelector(".anchor").style.color="black";
        document.querySelector(".anchor2").style.color="black";
        document.querySelector(".anchor3").style.color="black";
        document.querySelector(".anchor4").style.color="black";
        document.querySelector(".anchor1").style.color="black";
        document.querySelector(".anchor5").style.color="black";
        document.querySelector(".anchor6").style.color="black";
        document.querySelector(".anchor7").style.color="black";
        document.querySelector(".anchor8").style.color="black";
        document.querySelector(".anchor9").style.color="black";
    }
    // console.log(newbtn);
});