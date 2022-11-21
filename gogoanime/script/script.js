// code to show / hide the vertical nav bar by clicking on the menu button
let verticalNav = document.querySelector('#verticalNav');
toggle = true;
function navtoggle() {
    toggle = !toggle;
    if (toggle) {
        verticalNav.style.display = "none";
        console.log(" nav toggle is working display none");
    } else {
        verticalNav.style.display = "flex";
        console.log(" nav toggle is working display flex");
    }
}



// code to hide the vertical nav bar by clicking anywhere except navbar itself
function hide() {
    if (verticalNav.style.display = "flex") {
        console.log("hide function is called display none");
        verticalNav.style.display = "none";
    }
}



// code to hide the vertical nav bar by scrolling anywhere except navbar itself
window.addEventListener('scroll', (event) => {
    console.log("scroll function is called display none");
    verticalNav.style.display = "none";
});



// day week month section code here
let day = document.querySelector('#day');
let week = document.querySelector('#week');
let month = document.querySelector('#month');
let daysection = document.querySelector('#daysection');
var weeksection = document.querySelector('#weeksection');
let monthsection = document.querySelector('#monthsection');
// making the day container deafult color
if(daysection.style.display = 'flex'){
    day.style.color = 'white';
}
// day container visibility
function dayclick(){
    daysection.style.display = 'flex';
    weeksection.style.display = 'none';
    monthsection.style.display = 'none';
    console.log("day btn clicked");
    day.classList.remove('activeday');
    day.style.color = 'white';
    week.style.color = 'black';
    month.style.color = 'black';
}
// week container visibility
function weekclick(){
    console.log("week btn clicked");
    daysection.style.display = 'none';
    weeksection.style.display = 'flex';
    monthsection.style.display = 'none';
    day.classList.remove('activeday');
    day.style.color = 'black';
    week.style.color = 'white';
    month.style.color = 'black';
}
// month container visibility
function monthclick(){
    console.log("month btn clicked");
    daysection.style.display = 'none';
    weeksection.style.display = 'none';
    monthsection.style.display = 'flex';
    day.classList.remove('activeday');
    day.style.color = 'black';
    week.style.color = 'black';
    month.style.color = 'white';
}
