var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel:true
});
swiper.sliderMove = function (s, e) {
    console.log(s)
}
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}

function play(){
    let xy = document.getElementById("rlist")
    xy.style.display = "block"
    let cc = document.getElementById("srnav")
    cc.style.display = "block"
    let br = document.getElementById("rnav")
    br.style.display = "none"
}

function cod(){
    let xy = document.getElementById("rlist")
    xy.style.display = "none"
    let br = document.getElementById("srnav")
    br.style.display = "none"
    let hh = document.getElementById("rnav")
    hh.style.display ="block"
}

function but(){
    let bt = document.getElementsById("buttonGroup")
    bt.style.display = "none"
    let mbt =  document.getElementsByClassName("contactMe")
    mbt.style.display = "block"
}