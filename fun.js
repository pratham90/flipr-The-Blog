const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-1 '),
    smooth: true
});

function load(){
    var tl= gsap.timeline()
    tl.to(".page1",{
        y:"100vh",
        scale:0.6,
        duration:0
       
    })
    
    tl.to(".page1",{
        y:"-45vh",
        duration:2,
        
    })
    tl.to(".page1",{
        rotate:360,
        y:"0vh",
        scale:1,
        duration:2
    })
    }

    load()
    // var tl= gsap.timeline()
    // tl.from(".name",{
    // y:"-15vh",
    // duration:1
    // })
    // tl.from(".anchor",{
    // y:"-15vh",
    // duration:1.5
    // })
    // tl.from(".navbar li a",{
    // y:"-15vh",
    // duration:0.5
    // })
    // tl.from(".anchor3",{
    // y:"-15vh",
    // duration:2.5
    // })
    // tl.from(".switch",{
    // y:"-15vh",
    // duration:3
    // })
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