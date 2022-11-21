// elements variables
player = document.querySelector('.player');
enemy = document.querySelector('.enemy');
intro = document.querySelector('.intro');
score = document.querySelector('.score');

// global variable
let result = 0;
let cross = true;
let gameplay = true;

// audio variable
audiobg = new Audio("sound/music.mp3");
audiodie = new Audio("sound/gameover.mp3");

// buttons working
if (gameplay) {
    document.onkeydown = function (e) {
        console.log("key code is : ", e.keyCode)
        if (e.keyCode == 13) {
            enemy.classList.add("enemymove");
            player.style.display  = 'block';
            player.classList.remove("playerkilleffect");
            result = 0;
            audiobg.play();
            intro.innerHTML = "  ";
            player.style.left =  '100px';
        }
        if (e.keyCode == 38) {
            player.classList.add('playerUp');
            setTimeout(() => {
                player.classList.remove('playerUp');
            }, 600);
        }
        if (e.keyCode == 37) {
            Ax = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
            player.style.left = Ax - 100 + 'px';
        }
        if (e.keyCode == 39) {
            Ax = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
            player.style.left = Ax + 100 + 'px';
        }
    }
}

// checking result
setInterval(() => {
    Ax = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    Ab = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'));
    Bx = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('left'));
    Bb = parseInt(window.getComputedStyle(enemy, null).getPropertyValue('bottom'));

    offsetx = Math.abs(Ax - Bx);
    offsety = Math.abs(Ab - Bb);

    // PLAYER DIES
    if (offsetx < 190 && offsety < 70) {
        enemy.classList.remove("enemymove");
        gameplay = false;
        audiodie.play();
        setTimeout(() => {
            audiodie.pause();
            audiobg.pause();
            player.style.display  = 'none';
            result = 0;
            score.innerHTML = "Your Score is : " + result;
        }, 1000);
        player.classList.add("playerkilleffect");
        intro.innerHTML = "Press Enter to Play Again ";
    } else if (offsetx < 150 && cross) {    //score add
        result += 1;
        score.innerHTML = "Your Score is : " + result;
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 10);