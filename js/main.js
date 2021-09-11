// ---------header--------
// ---------menu---------
let moon=document.querySelector(".fa-moon-o");
let sun=document.querySelector(".fa-sun-o");
let header=document.querySelector(".header");
let wordsH2=document.querySelector("#wordsH2"); 
moon.addEventListener("click",function(){
    moon.style.display="none";
    sun.style.display="block";
    header.style.backgroundImage="url(imgs/img1.jpg)"
    wordsH2.innerHTML="Day Trips";
})
sun.addEventListener("click",function(){
    sun.style.display="none";
    moon.style.display="block";
    header.style.background="linear-gradient(rgba(45, 45,46, 0.8),rgba(17, 40, 66, 0.5)),url(imgs/img1.jpg)"
    wordsH2.innerHTML="Night Trips"
})
let menuBars=document.querySelector("#menuBars");
let menuTimes=document.querySelector("#menuTimes");
let ulMenu=document.querySelector("#ulMenu");
menuBars.addEventListener("click",function(){
    menuBars.style.display="none";
    menuTimes.style.display="block";
    ulMenu.style.display="block";
});
menuTimes.addEventListener("click",function(){
    menuBars.style.display="block";
    menuTimes.style.display="none";
    ulMenu.style.display="none";
});
// ------menu search------
let search1=document.querySelector("#search1");
let times1=document.querySelector("#times1");
let menuSesrchInput=document.querySelector(".menu-search-input");
search1.addEventListener("click",function(){
    search1.style.display="none";
    times1.style.display="block" 
    menuSesrchInput.style.display="flex";
})
times1.addEventListener("click",function(){
    search1.style.display="block";
    times1.style.display="none"; 
    menuSesrchInput.style.display="none";

})
// --------- text move ---------
let wordsI=document.querySelector("#wordsI");
let i=0;
let text="Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur";
function func(){
    if(i<text.length){
        wordsI.innerHTML+=text.charAt(i);
        i++;
        setTimeout(func,100);
    }
    else{
        i=0;
        wordsI.innerHTML=".";
        setTimeout(func,100);
    }
}
func();
    //  -------header words-------
    let twitter1=document.querySelector("#twitter1");
    let twitter2=document.querySelector("#twitter2");
    let instagram1=document.querySelector("#instagram1");
    let instagram2=document.querySelector("#instagram2");
    let fecebook1=document.querySelector("#fecebook1");
    let fecebook2=document.querySelector("#fecebook2");
    let chanel1=document.querySelector(".chanel1");
    let chanel2=document.querySelector(".chanel2");
    let chanel3=document.querySelector(".chanel3");
    let chanel4=document.querySelector(".chanel4");
    let chanel5=document.querySelector(".chanel5");
    let chanel6=document.querySelector(".chanel6");
    let headerBlock=document.querySelector(".header-block");
    twitter1.addEventListener("click",function(){
        twitter1.style.display="none";
        twitter2.style.display="block";
        instagram1.style.display="block";
        instagram2.style.display="none";
        facebook1.style.display="block";
        facebook2.style.display="none";
        chanel1.style.display="flex";
        chanel2.style.display="flex";
        chanel3.style.display="none";
        chanel4.style.display="none";
        chanel5.style.display="none";
        chanel6.style.display="none";   
        headerBlock.style.background="linear-gradient(rgba(73,43,56, 0.6),rgba(73,43,56, 0.6)),url(imgs/img1.jpg)";
        headerBlock.style.backgroundSize="cover";
        headerBlock.style.backgroundPosition="center";
    });
    twitter2.addEventListener("click",function(){
        twitter1.style.display="block";
        twitter2.style.display="none";
        headerBlock.style.background="none";
        chanel1.style.display="none";
        chanel2.style.display="none";
    });
    instagram1.addEventListener("click",function(){
        twitter1.style.display="block";
        twitter2.style.display="none";
        instagram1.style.display="none";
        instagram2.style.display="block";
        facebook1.style.display="block";
facebook2.style.display="none";
        chanel1.style.display="none";
        chanel2.style.display="none";
        chanel3.style.display="flex";
        chanel4.style.display="flex";
        chanel5.style.display="none";
        chanel6.style.display="none";
        headerBlock.style.background="linear-gradient(rgba(73,43,56, 0.6),rgba(73,43,56, 0.6)),url(imgs/img1.jpg)";
        headerBlock.style.backgroundSize="cover";
        headerBlock.style.backgroundPosition="center";
    });
    instagram2.addEventListener("click",function(){
        instagram1.style.display="block";
        instagram2.style.display="none";
        headerBlock.style.background="none";
        chanel3.style.display="none";
        chanel4.style.display="none";
    });
    facebook1.addEventListener("click",function(){
        twitter1.style.display="block";
        twitter2.style.display="none";
        instagram1.style.display="block";
        instagram2.style.display="none";
        facebook1.style.display="none";
        facebook2.style.display="block";
        chanel1.style.display="none";
        chanel2.style.display="none";
        chanel3.style.display="none";
        chanel4.style.display="none";
        chanel5.style.display="flex";
        chanel6.style.display="flex";
        headerBlock.style.background="linear-gradient(rgba(73,43,56, 0.6),rgba(73,43,56, 0.6)),url(imgs/img1.jpg)";
        headerBlock.style.backgroundSize="cover";
        headerBlock.style.backgroundPosition="center";
    });
    facebook2.addEventListener("click",function(){
        facebook1.style.display="block";
        facebook2.style.display="none";
        headerBlock.style.background="none";
        chanel5.style.display="none";
        chanel6.style.display="none";
    });
    //  ------- Main -------
    $("document").ready(function(){
        $("body").append("<section class='main'></section>");
        $(".main").append("<section class='main-services'></section>");
        $(".main-services").append("<div class='services-in'></div>");
        $(".main-services").append("<div class='services-img'></div>");
        $(".main-services").append("<div class='services-out'></div>");
        $(".main").css({
            "width":"100%",
            "height":"100%"
        });
        $(".main-services").css({
            "width":"100%",
            "height":"100%",
            "display":"grid",
            "grid-template-columns":"repeat(3,1fr)"
        });
        $(".services-in").append("<i class='fa fa-truck'></i>");
        $(".services-in").append("<p>Services of hotel</p>")
        $(".services-in").append("<h3>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h3>")
        $(".services-in").append("<button>More</button>");
        $(".services-in").css({
            // "height":"400px",
            "border":"2px solid lightgrey",
            "width":"300px",
            "display":"flex",
            "flex-flow":"column",
            "align-items":"center",
            "justify-content":"center",
            "padding":"10px",
            "margin-bottom":"100px",
            "margin-left":"5px"
        });
        $(".services-in button").css({
            "border":"none",
            "outline":"none",
            "color":"#fff",
            "font-size":"1.5rem",
            "background-color":"lime",
            "padding":"10px",
            "border-radius":"12px",
            "transition":"0.5s",
            "cursor":"pointer",
            "margin":"0 auto"
        });
        $(".services-in i").css({
            "color":"#fff",
            "font-size":"4rem",
            "padding":"20px",
            "border-radius":"50%",
            "background-color":"gold",
            "cursor":"pointer"
        })
        $(".services-in p").css({
            "color":"blue",
            "font-size":"1.5rem",
            "margin":"8px 0px"
        });
        $(".services-in h3").css({
           "display":"none",
           "margin":"5px 0px"
        });
        $("button").click(()=>{
            $("h3").slideToggle();
        })
    })