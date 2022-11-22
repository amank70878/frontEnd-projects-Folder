let string = "";
let buttons = document.querySelectorAll(".num");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let clickAudio = new Audio('click.mp3');
    if (e.target.innerHTML == "=") {
        clickAudio.play();
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
        clickAudio.play();
      string = "";
      document.querySelector("input").value = string;
    } else {
        clickAudio.play();
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
