let nav1 = document.querySelector("#sidebar2-svg");
let sidebar1 = document.querySelector("#small-sidebar-container");
let small_sidebar_section = document.querySelector("#small-sidebar-section");
let nav2 = document.querySelector("#nav2");
let sidebar2 = document.querySelector("#sidebar-section");
let sidebar_section_outer_container = document.querySelector("#sidebar-section-outer-container"); 
let theme_svg = document.querySelector("#theme-svg");
let upper_nav_outer = document.querySelector("#upper-nav-outer");
let upper_nav_outer_input = document.querySelector("#upper-left-nav-input");




// theme changes
theme_svg.addEventListener('click', ()=>{
    console.log("theme btn is clicked");
    theme_svg.style.background ="#202830"; 
    theme_svg.style.fill ="#ffce45"; 
    upper_nav_outer.style.background = 'rgb(17 25 40 / 75%)';
    upper_nav_outer_input.style.background = '#202830';
    // upper_nav_outer_inpu.style: = 'white';
})

// navbar changes
nav1.addEventListener('click', () => {
    console.log("nav small is clicked");
    sidebar1.style.display = "none";
    small_sidebar_section.style.width = "0px";
    sidebar_section_outer_container.style.width = "var(--longnav)";
    sidebar_section_outer_container.style.display = "flex";
})

nav2.addEventListener("click", () => {
    console.log("nav long is clicked");
    sidebar1.style.display = "flex";
    small_sidebar_section.style.width = "var(--smallnav)";
    sidebar_section_outer_container.style.width = "0px";
    sidebar_section_outer_container.style.display = "none";
})


// slider js for now playing movies section
$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        // start looping on the cards
        // loop: true,
        // onSliderLoad: function () {
        //     $('#autoWidth').removeClass('cS-hidden');
        // }
    });
});
// slider js for top thriller section
$(document).ready(function () {
    $('#autoWidth2').lightSlider({
        autoWidth: true,
    });
});
// slider js for top Sci-Fi section
$(document).ready(function () {
    $('#autoWidth3').lightSlider({
        autoWidth: true,
    });
});
// slider js for top kids section
$(document).ready(function () {
    $('#autoWidth4').lightSlider({
        autoWidth: true,
    });
});
// slider js for top horror section
$(document).ready(function () {
    $('#autoWidth5').lightSlider({
        autoWidth: true,
    });
});
// slider js for Now Airing TV Shows section
$(document).ready(function () {
    $('#autoWidth6').lightSlider({
        autoWidth: true,
    });
});
// slider js for Top Documentaries section
$(document).ready(function () {
    $('#autoWidth7').lightSlider({
        autoWidth: true,
    });
});

