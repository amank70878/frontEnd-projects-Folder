const img = document.getElementById('nav-div-img');
toggle = true;
img.addEventListener('click', ()=>{
    console.log("img source change");
    let els = document.querySelectorAll(".span-display");
    let left = document.querySelector("#left");
    let left_scrollable = document.querySelector("#left-scrollable");
    let right = document.querySelector("#right");
    let second_Side = document.querySelector("#second-side");

    //toggle
    toggle = !toggle;
    if(toggle){
        img.src= "../images/menu.png";
        for (var x = 0; x < els.length; x++){
            els[x].style.display = 'none';
            left_scrollable.style.overflow = 'hidden';
            right.style.left = '75px';
            second_Side.style.display = "none";
        }
    }else{
        img.src = "../images/menu1.png";
        for (var x = 0; x < els.length; x++){
            els[x].style.display = 'inline';
            right.style.left = '192px';
            left_scrollable.style.overflow = 'scroll';
            second_Side.style.display = "flex";
        }
    }
})

