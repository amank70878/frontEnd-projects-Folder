/* ^^^^^^^^^^^^^^^^
------------------1st problem------------------
^^^^^^^^^^^^^^^^^*/

var currentYear = 2022;
function ageInNumber() {
  var inputAgeYear = prompt("Enter Your Birth Year");
  var yearOld = currentYear - inputAgeYear;
  var result = (currentYear - inputAgeYear) * 365;
  document.querySelector("#info").innerHTML =
    "you are" + " " + yearOld + " years old";
  document.querySelector("#ageInNumberDiv").innerHTML =
    "your age in numbers from" +
    " " +
    inputAgeYear +
    " to " +
    currentYear +
    " is : " +
    result;
}

/* ^^^^^^^^^^^^^^^^
------------------2nd problem------------------
^^^^^^^^^^^^^^^^^*/

function addDiv() {
  num1 = document.createElement("div");
  num1.classList.add("second-cards");
  second_cats_div = document.querySelector("#second-cats-div");
  second_cats_div.appendChild(num1);
  console.log("add div btn clicked");
}

/* ^^^^^^^^^^^^^^^^
------------------3rd problem------------------
^^^^^^^^^^^^^^^^^*/

let bot;
function rpsgame(playerChoice) {
  player = playerChoice.id; // fetching the player choice

  randomChooseNum(); // fetching the bot choice

  // fight btw player and bot
  if (player === "rock" && bot === "rock") {
    //rock
    resultText = "match tie";
  } else if (player === "rock" && bot === "paper") {
    resultText = "bot wins the game";
  } else if (player === "rock" && bot === "scissor") {
    resultText = "You wins the game";
  } else if (player === "paper" && bot === "rock") {
    //paper
    resultText = "You wins the game";
  } else if (player === "paper" && bot === "paper") {
    resultText = "match tie";
  } else if (player === "paper" && bot === "scissor") {
    resultText = "bot wins the game";
  } else if (player === "scissor" && bot === "rock") {
    //scissor
    resultText = "bot wins the game";
  } else if (player === "scissor" && bot === "paper") {
    resultText = "You wins the game";
  } else if (player === "scissor" && bot === "scissor") {
    resultText = "match tie";
  }

  // show the winner
  result_div = document.querySelector("#third-result-div");

  // player img displaying
  result_div.style.transform = "scale(1)";
  result_div.style.display = "flex";
  document.querySelector("#player-img").src = playerChoice.src;

  // displaying text
  resultText = document.querySelector("#result-span").innerHTML = resultText;
}

function randomChooseNum() {
  // bot choose the random choice function
  a = 0;
  b = 2;
  enemy_img = document.querySelector("#enemy-img");
  result = Math.round(a + (b - a) * Math.random());
  switch (result) {
    case 0:
      bot = "rock";
      enemy_img.src = "static/images/project 2/e-rock.png";
      break;
    case 1:
      bot = "paper";
      enemy_img.src = "static/images/project 2/e-paper.png";
      break;
    case 2:
      bot = "scissor";
      enemy_img.src = "static/images/project 2/e-scissor.png";
      break;
    default:
      break;
  }
}

/* ^^^^^^^^^^^^^^^^
------------------4th problem------------------
^^^^^^^^^^^^^^^^^*/
let all_btns = document.getElementsByTagName("button");

let copyAllBtns = []; // copy aa btns bg color class
for (let i = 0; i < all_btns.length; i++) {
  copyAllBtns.push(all_btns[i].classList[1]);
}

function changeColorFunction(colorOption) {
  // main change color function
  console.log(colorOption.value);
  if (colorOption.value === "Red") {
    // working of Red
    for (let i = 0; i < all_btns.length; i++) {
      all_btns[i].classList.remove(all_btns[i].classList[1]);
      all_btns[i].classList.add("btn-Red");
    }
  } else if (colorOption.value === "Blue") {
    // working of Blue
    for (let i = 0; i < all_btns.length; i++) {
      all_btns[i].classList.remove(all_btns[i].classList[1]);
      all_btns[i].classList.add("btn-Blue");
    }
  } else if (colorOption.value === "Green") {
    // working of Green
    for (let i = 0; i < all_btns.length; i++) {
      all_btns[i].classList.remove(all_btns[i].classList[1]);
      all_btns[i].classList.add("btn-Green");
    }
  } else if (colorOption.value === "Grey") {
    // working of Grey
    for (let i = 0; i < all_btns.length; i++) {
      all_btns[i].classList.remove(all_btns[i].classList[1]);
      all_btns[i].classList.add("btn-Grey");
    }
  } else if (colorOption.value === "Yellow") {
    // working of Yellow
    for (let i = 0; i < all_btns.length; i++) {
      all_btns[i].classList.remove(all_btns[i].classList[1]);
      all_btns[i].classList.add("btn-Yellow");
    }
  } else if (colorOption.value === "Random") {
    // working of Random
    randomColorBtn();
  } else if (colorOption.value === "Reset") {
    // working of reset
    for (let i = 0; i < all_btns.length; i++) {
      all_btns[i].classList.remove(all_btns[i].classList[1]);
      all_btns[i].classList.add(copyAllBtns[i]);
    }
  }
}

function randomColorBtn() {
  console.log(copyAllBtns);
  for (let i = 0; i < all_btns.length; i++) {
    let randomNumber = Math.round(0 + (6 - 0) * Math.random());
    console.log(randomNumber);
    all_btns[i].classList.remove(all_btns[i].classList[1]);
    all_btns[i].classList.add(copyAllBtns[randomNumber]);
  }
}

/* ^^^^^^^^^^^^^^^^
------------------5th problem------------------
^^^^^^^^^^^^^^^^^*/

// MAKING VARIABLES
const audioHit = new Audio("static/sounds/project 5/swish.m4a");
const audioLose = new Audio("static/sounds/project 5/aww.mp3");
const audioWin = new Audio("static/sounds/project 5/cash.mp3");
let blackjackGame = {
  you: { scoreSpan: "#your-score", div: "#your-box", score: 0 },
  dealer: { scoreSpan: "#dealer-score", div: "#dealer-box", score: 0 },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, [1, 11]],
  wins: "",
  losses: "",
  draws: "",
  hitWorking: true,
  standWorking: false,
  isgameOver: false,
};
const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];
const DREW = "Match Drew";
const CARDS = blackjackGame["cards"];
const VALUE = blackjackGame["value"];
let winGridScore = blackjackGame["wins"];
let loseGridScore = blackjackGame["losses"];
let drewGridScore = blackjackGame["draws"];
let hitWorking = blackjackGame["hitWorking"];
let standWorking = blackjackGame["standWorking"];
let isgameOver = blackjackGame["isgameOver"];

// declare the btn functions
document.querySelector(".btn-51").addEventListener("click", blackjackHit);
document.querySelector(".btn-52").addEventListener("click", blackjackStand);
document.querySelector(".btn-53").addEventListener("click", blackjackDeal);

// making HIT btn functions
function blackjackHit() {
  if (hitWorking === true) {
    audioHit.play();
    //giving the random digit value to every function
    let randomNo = Math.round(0 + (12 - 0) * Math.random());

    // calling functions
    showcards(YOU, randomNo);
    updateScore(YOU, randomNo);
    standWorking = true;
  }
}

function showcards(activePlayer, randomNo) {
  if (activePlayer["score"] <= 21) {
    randomNo = CARDS[randomNo];
    let img = document.createElement("img");
    img.src = `static/images/project 5/${randomNo}.png`;
    document.querySelector(activePlayer["div"]).appendChild(img);
  }
}

function updateScore(activePlayer, randomNo) {
  if (randomNo == 12) {
    // if score is greater than 21 by adding A of value 11 then add 1 otherwise 11
    if (activePlayer["score"] + VALUE[randomNo][1] > 21) {
      activePlayer["score"] += VALUE[randomNo][0];
    } else {
      activePlayer["score"] += VALUE[randomNo][1];
    }
  } else {
    activePlayer["score"] += parseInt(blackjackGame["value"][randomNo]);
  }
  // displaying the score in active player score's span
  if (activePlayer["score"] <= 21) {
    document.querySelector(activePlayer["scoreSpan"]).innerHTML =
      activePlayer["score"];
    document.querySelector(activePlayer["scoreSpan"]).style.color = "white";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!!!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// making STAND btn functions
async function blackjackStand() {
  if (standWorking === true) {
    while (DEALER["score"] < 15 && standWorking === true) {
      //giving the random digit value to every function
      let randomNo = Math.round(0 + (12 - 0) * Math.random());

      // calling functions
      showcards(DEALER, randomNo);
      updateScore(DEALER, randomNo);
      await sleep(1000);
    }
    let winner = blackjackWinLogic();
    showWhoWon(winner);

    hitWorking = false;
    standWorking = false;
    isgameOver = true;
  }
}

// making DEAL btn functions
function blackjackDeal() {
  if (isgameOver === true) {
    setTimeout(() => {
      let img = document.querySelector("#your-box").querySelectorAll("img");
      for (let i = 0; i < img.length; i++) {
        img[i].remove();
      }
      let img1 = document.querySelector("#dealer-box").querySelectorAll("img");
      for (let i = 0; i < img1.length; i++) {
        img1[i].remove();
      }
    }, 200);
    YOU["score"] = 0;
    DEALER["score"] = 0;
    document.querySelector("#your-score").innerHTML = "0";
    document.querySelector("#your-score").style.color = "white";
    document.querySelector("#dealer-score").innerHTML = "0";
    document.querySelector("#dealer-score").style.color = "white";
    document.querySelector(".fifth-letsPlay").textContent = "Let's Play";
    document.querySelector(".fifth-letsPlay").style.color = "grey";

    isgameOver = false;
    hitWorking = true;
  }
}

function blackjackWinLogic() {
  let winner;
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      winner = DEALER;
    } else if ((YOU["score"] = DEALER["score"])) {
      winner = DREW;
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    winner = DREW;
  }
  return winner;
}

function showWhoWon(winner) {
  let msg, msgColor;
  if (winner === YOU) {
    audioWin.play();
    msg = "You Won :)";
    msgColor = "green";
    winGridScore++;
  } else if (winner === DEALER) {
    audioLose.play();
    msg = "You Lose";
    msgColor = "red";
    loseGridScore++;
  } else if (winner === DREW) {
    audioLose.play();
    msg = "Match Drew";
    msgColor = "orangered";
    drewGridScore++;
  } else {
    msg = "Let's Play";
    msgColor = "grey";
  }
  document.querySelector(".fifth-letsPlay").textContent = msg;
  document.querySelector(".fifth-letsPlay").style.color = msgColor;
  document.querySelector(".grid-values-1").textContent = winGridScore;
  document.querySelector(".grid-values-2").textContent = loseGridScore;
  document.querySelector(".grid-values-3").textContent = drewGridScore;
}

/* ^^^^^^^^^^^^^^^^
------------------6th problem------------------
^^^^^^^^^^^^^^^^^*/
let container = document.querySelector(".jokeContainer");
let jokeDiv = document.querySelector(".jokeDiv");
let btn6 = document.querySelector(".btn6");

let jokesArray = [
  `What do you call a boomerang that wont come back?
A stick.`,
  `hat does a cloud wear under his raincoat?
Thunderwear.`,
  `wo pickles fell out of a jar onto the floor. What did one say to the other?
Dill with it.`,
  `hat time is it when the clock strikes 13?
Time to get a new clock.`,
  `ow does a cucumber become a pickle?
It goes through a jarring experience.`,
  `s for kids
6. What did one toilet say to the other?
You look a bit flushed.`,
  `hat do you think of that new diner on the moon?
Food was good, but there really wasnt much atmosphere.`,
  `hy did the dinosaur cross the road?
Because the chicken wasnt born yet.`,
  `hy cant Elsa from Frozen have a balloon?
Because she will "let it go, let it go."`,
  `What musical instrument is found in the bathroom?
A tuba toothpaste.`,
  `ted: Funny Christian Jokes
`,
  `Why did the kid bring a ladder to school?
Because she wanted to go to high school.`,
  `What do you call a dog magician?
A labracadabrador.`,
  `Where would you find an elephant?
The same place you lost her.`,
  `s for kids
14. How do you get a squirrel to like you?
Act like a nut.`,
  `What do you call two birds in love?
Tweethearts`,
  `How does a scientist freshen her breath?
With experi-mints.`,
  `How are false teeth like stars?
They come out at night.`,
  `What building in your town has the most stories?
The public library.`,
  `Whats worse than finding a worm in your apple?
Finding half a worm.`,
  `What is a computers favorite snack?
Computer chips.`,
  `What did one volcano say to the other?
I lava you.`,
  `How do we know that the ocean is friendly?
It waves.`,
  `What is a tornados favorite game to play?
Twister.`,
  `How does the moon cut his hair?
Eclipse it.`,
  `How do you talk to a giant?
Use big words.`,
  `ted: 101 Knock Knock Jokes for Kids
`,
  `What animal is always at a baseball game?
A bat.`,
  `What falls in winter but never gets hurt?
Snow.`,
  `What did the Dalmatian say after lunch?
That hit the spot.`,
  `Why did the kid cross the playground?
To get to the other slide.`,
  `What do you call a droid that takes the long way around?
R2 detour.`,
  `Why did the cookie go to the hospital?
Because he felt crummy.`,
  `Why was the baby strawberry crying?
Because her mom and dad were in a jam.`,
  `What did the little corn say to the mama corn?
Where is pop corn?`,
  `How do you make a lemon drop?
Just let it fall.`,
  `What did the limestone say to the geologist?
Dont take me for granite.`,
  `Why does a seagull fly over the sea?
Because if it flew over the bay, it would be a baygull.`,
  `What kind of water cant freeze?
Hot water.`,
  `What kind of tree fits in your hand?
A palm tree.`,
  `What do you call a dinosaur that is sleeping?
A dino-snore.`,
  `What is fast, loud and crunchy?
A rocket chip.`,
  `Why did the teddy bear say no to dessert?
Because she was stuffed.`,
  `What has ears but cannot hear?
A cornfield.`,
  `What did the left eye say to the right eye?
Between us, something smells.`,
  `What did one plate say to the other plate?
Dinner is on me.`,
  `Why did the student eat his homework?
Because the teacher told him it was a piece of cake.`,
  `When you look for something, why is it always in the last place you look?
Because when you find it, you stop looking.`,
  `What is brown, hairy and wears sunglasses?
A coconut on vacation.`,
  `ted: 101 Riddles for Kids
`,
  `y Birthday Jokes for Kids
Kids jokes`,
  `What do you say to a rabbit on its birthday?
Hoppy Birthday.`,
  `Whats the one thing will you get every year on your birthday, guaranteed?
A year older.`,
  `Why do candles always go on the top of cakes?
Because its hard to light them from the bottom.`,
  `What do cakes and baseball teams have in common?
They both need a good batter.`,
  `What goes up but never comes down?
Your age.`,
  `What does every birthday end with?
The letter Y.`,
  `What did the tiger say to her cub on his birthday?
Its roar birthday.`,
  `Why did the girl put her cake in the freezer?
She wanted to ice it.`,
  `Does a green candle burn longer than a pink one?
No, they both burn shorter.`,
  `Why did the little girl hit her birthday cake with a hammer?
It was a pound cake.`,
  `y Yo Mama Jokes for Kids
58. Yo Mama so small her best friend is an ant.`,
  `Yo Mama so old God signed her yearbook.
`,
  `Yo Mama so short she has to hold a sign up that says, "Dont spit, I cant swim."
`,
  `Yo Mama so small she has to slam-dunk her bus fare.
`,
  `Yo Mama so old she rode dinosaurs to school.
`,
  `Yo Mama so old her memory is in black and white.
`,
  `y Kids Jokes about Math
Jokes for kids`,
  `Why didnt the quarter roll down the hill with the nickel?
Because it had more cents.`,
  `Why is the obtuse triangle always so frustrated?
Because its never right.`,
  `Why is six afraid of seven?
Because seven eight nine.`,
  `Why was the equal sign so humble?
Because he wasnt greater than or less than anyone else.`,
  `What do you call guys who love math?
Algebros.`,
  `How do you stay warm in any room?
Go to the corner—its always 90 degrees.`,
  `Why was the fraction nervous about marrying the decimal?
Because he would have to convert.`,
  `Are monsters good at math?
Not unless you count Dracula.`,
  `Why was the math book sad?
Because it had too many problems.`,
  `Why does nobody talk to circles?
Because theres no point.`,
  `ted: 50 Funny Math Jokes and Math Puns
`,
  `y Animal Kids Jokes
A kids joke about animals.
Jokes for Kids`,
  `Why couldnt the pony sing a lullaby?
She was a little horse.`,
  `What was the first animal in space?
The cow that jumped over the moon.`,
  `Why dont elephants chew gum?
They do, just not in public.`,
  `What did the banana say to the dog?
Bananas cant talk.`,
  `How do you make an octopus laugh?
With ten-tickles.`,
  `What do you call a sleeping bull?
A bull-dozer.`,
  `How do you fit more pigs on a farm?
Build a sty-scraper.`,
  `What did the farmer call the cow that had no milk?
An udder failure.`,
  `What do you call a cow that wont give milk?
A milk dud.`,
  `Why do fish live in salt water?
Because pepper makes them sneeze.`,
  `What do you get from a pampered cow?
Spoiled milk.`,
  `Where do polar bears vote?
The North Poll`,
  `What sound do porcupines make when they kiss?
Ouch!`,
  `Why did the snake cross the road?
To get to the other ssside.`,
  `Why are fish so smart?
Because they live in schools.`,
  `ted: 101 Corny Jokes
`,
  `y Pirate Jokes for Kids
Pirate-jokes-kids`,
  `What did the ocean say to the pirate?
Nothing, it just waved.`,
  `Why dont pirates shower before they walk the plank?
Because theyll just wash up on shore later.`,
  `What happened when Bluebeard fell overboard in the Red Sea?
He got marooned.`,
  `How did the pirate get his flag so cheaply?
He bought it on sail.`,
  `What has 8 legs, 8 arms, and 8 eyes?
8 pirates.`,
  `How much does it cost a pirate to get his ears pierced?
About a buck an ear.`,
  `Why is pirating so addictive?
They say once ye lose yer first hand, ye get hooked.`,
  `How do pirates know that they are pirates?
They think, therefore they arrr.`,
];
jokeDiv.textContent = jokesArray[0];

function tellJoke() {
  console.log("btn clicked");
  randomNum = Math.round(Math.random() * 101);
  jokeDiv.textContent = jokesArray[randomNum];
}

/* ^^^^^^^^^^^^^^^^
------------------7th problem------------------
^^^^^^^^^^^^^^^^^*/

// variables
let btn7 = document.querySelector(".btn-7");
let tbody7 = document.querySelector("#tbody7");
let alertDiv7 = document.querySelector(".alertDiv7");
let edit7 = document.querySelector(".edit7");
let table_id = document.querySelector("#table_id");
let name7Modal = document.querySelector("#name7Modal");
let note7Modal = document.querySelector("#note7Modal");
let edit7Submit = document.querySelector(".edit7Submit");
let indexRow = 3;

// import new notes btn working
btn7.addEventListener("click", () => {
  let name7 = document.querySelector("#name7").value;
  let note7 = document.querySelector("#note7").value;
  let localIndex = 0;
  console.log("import new note btn clicked");
  // addInLocal(name7, note7)

  // CHECKING IF THE FORM IS EMPTY
  insertdata(name7, note7, localIndex);
  //clear the form after submitting
  clearform();
});

const clearform = () => {
  console.log("clear func");
  document.querySelector("#name7").value = "";
  document.querySelector("#note7").value = "";
};

// insert data from the form
const insertdata = (name, note) => {
  if (name == "" || note == "") {
    console.log("form is empty");
    alertChild = document.createElement("div");
    alertChild.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade  show" role="alert">
        <strong>Holy guacamole!</strong> You can't save the empty note
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `;
    alertDiv7.appendChild(alertChild);
  } else {
    // adding the data in the form
    create7data(name, note);
  }
};

// create the data
const create7data = (name, note) => {
  let row = document.createElement("tr");
  indexRow++;

  // make the digits in atleast two character
  if (indexRow < 10) {
    indexRow = "0" + indexRow;
  } else {
    indexRow = indexRow;
  }
  row.innerHTML = ` 
      <td>${indexRow}</td>
      <td>${name}</td>
      <td>${note}</td>
      <td>
        <a href='#table_id' class="btn btnTable7 edit7" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
        <a href="#table_id" class="btn btnTable7 delete7">Delete</a>
      </td>
    `;
  tbody7.appendChild(row);
  alertChild = document.createElement("div");
  alertChild.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong>You have Successfully Submit the form :)
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
  alertDiv7.appendChild(alertChild);
};

const addInLocal = (name, note) => {
  let crud = [];
  let obj = [];
  (add = [`${name}`, `${note}`]), crud.push(add);
  obj = JSON.parse(localStorage.object);
  obj.push(add);
  localStorage.object = JSON.stringify(obj); // Will ignore private members

  // crud[Object.keys(crud)[0]]; // gives output of the first element
  // var newAlert = { 3: "ccc" }; // new element
  // $.extend(crud, newAlert); // push new element in
};

const fetchFromLocal = () => {};
fetchFromLocal();

// update the data in the datatable
const update7data = (sno, name, note, target) => {
  name.innerHTML = name7Modal.value;
  note.innerHTML = note7Modal.value;
};

//EDIT THE DATA
tbody7.addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit7")) {
    console.log("edit btn clicked");
    target = e.target;
    targetP = target.parentElement.parentElement;
    targetSno = targetP.getElementsByTagName("td")[0];
    targetName = targetP.getElementsByTagName("td")[1];
    targetNote = targetP.getElementsByTagName("td")[2];
    name7Modal.value = targetName.innerHTML;
    note7Modal.value = targetNote.innerHTML;
    edit7Submit.setAttribute("data-bs-dismiss", "modal");

    edit7Submit.addEventListener("click", () => {
      console.log("save edit btn clicked");
      update7data(targetSno, targetName, targetNote, targetP);
    });
  }
});

// delete btn working
tbody7.addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete7")) {
    target.parentElement.parentElement.remove();
  }
});

/* ^^^^^^^^^^^^^^^^
------------------8th problem------------------
^^^^^^^^^^^^^^^^^*/

class password {
  constructor() {
    this.pass = "";
  }
  passwordgenerator(len, small, big, number, special, funny) {
    let smallChars = `abcdefghijklmnopqrstuvwxyz`;
    let bigChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let num = "0123456789";
    let spec = "!@#$%&*";
    let funny1 = [
      "OldMacDonaldHadaBurger",
      "LOGGRedneck",
      "FasterThanFedEx",
      "TrailerParkIBMEngineer",
      "SellMySoulonEbay",
      "Amazonsonline",
      "LikeAVirginiaSlim",
      "WorldWildlifeFun",
      "Shellpitstop",
      "NoMoreBucksforStarbucks",
      "Disneymonster",
      "JingleTacoBells",
      "RollsAnotherRoyce",
      "FidelCastroCigars",
      "EssieFingerTips",
      "dragonballZ",
      "giants",
      "Marlboro",
      "Yamaha",
      "harleydavidson",
      "jaguar",
      "armaniman",
      "magnum",
      "broncos",
      "Nascar",
      "thunderbird",
      "doubletwix",
      "mustss",
      "NothingElseMatters",
      "WeretheLordsoftheBoards",
      "BluejeanbabyLALady",
      "DieAntwoortPassword",
      "HelterSkelter66",
      "IbelieveIcanfly",
      "BornInTheUSofA",
      "TheGreenGreenGrassofHomepage",
      "CameinlikeaWr3kkB4ll",
      "GiveANametoAlltheAnimals",
      "LeonardodiCohen",
      "HitMeBaby1MoreTime",
      "HotelCaliforniaDreaming",
      "CottonEyeJoe",
      "Celticsounds",
      "HappyNation",
      "LaVieEnRose",
      "WakeMeUpSeptemberEnds",
      "Firestartah",
      "YYYDelilah",
      "BillieJeanNotMyGirl",
      "RockULikeaHurricane",
      "GalileoGalileo",
      "PutYourLightsOn",
      "BrimfulOfAsha45",
      "StillGotTheBlues",
      "StraightOuttaCompton",
      "Walktheline",
      "theramones",
      "IWishIwasaPunkRocker",
      "Another1BitestheDust",
      "EveryBreathYouTake",
      "lacrimosa",
      "requiem",
      "HelloMyNameIsDoctorGreenthumb",
      "IfIWasARichGirlNanana",
      "WhotheFisAlice",
      "ThieveryCorp",
      "BrickIntheWall",
      "RollOverBethoven",
      "2princes",
      "GenesisPhil",
      "Ke$$a",
      "ImagineAllThePeople",
      "WaterlooSunset",
      "ISaidMaybe",
      "hallelujah",
      "GoodBeachVibrations",
      "FamilyAffair",
      "SultansOfSwing",
      "RiverDeepMountainHigh",
      "MarvinGayeFan",
      "ShouldIStayOrShouldIGo",
      "RealSlimShadyPlsStandUp",
      "BehindBlueEyes",
      "MyBabyWorksfrom9to5",
      "CloseMyEyesandCountto10",
      "19thNervousBreakdown",
      "50WaystoLeaveYourLover",
      "SummerOf69",
      "ICantGetNoSatisfaction",
      "SmoothCriminal",
      "LikeTheDesertsMissTheRain",
      "TooSexyForMyCat",
      "Route66",
      "DancingQueen",
      "SomebodyIUsedToKnow",
      "NewKidInTown",
      "Lambada",
      "CloudNo9",
      "BecauseYourGorgeous",
      "IGotThePower",
      "1MilByciclesInBeijing",
      "ImBlueDaBaDee",
      "TeenageDirtBagBaby",
      "Anaconda",
      "OpaGangnamStyle",
      "FightForUrRightToParty",
      "HighwayToHell",
      "HadTheTimeOfMyLife",
      "CaroEmerald",
      "Back2Black",
      "TheyTried2MakeMeGoToRehab",
      "MyFathersGun",
      "RedHotChiliPipers",
      "Moby123",
      "PokerFace",
      "RadioGagaRadioGugu",
      "JustPushIt",
      "UmbrellaElaEla",
      "LoveOfMyLife",
      "LiquidNarc",
      "DontCallMyNameAlejandro",
      "LadyInRed",
      "AintNobodyLovesMeBetter",
      "ByTheRiverOfBabylon",
      "OhHackyDay",
      "NothingButMammals",
      "RussianRoulette",
      "KissOfFire",
      "IWillSurvive",
      "LadyGodiva",
      "AmazingGrace",
      "ShowMustGoOn",
      "CantHelpFalling",
      "IWillGoDownWithThisShip",
      "LikeARollingStone",
      "MeAndBobbyMcGee",
      "RowRowRowYourBoat",
      "TheDayTheMusicDied",
      "SameJeansOnFor4DaysNow",
      "DiamondsAndRust",
      "EyeOfTheTiger",
      "ItsTheFinalCountdown",
      "6FootTallCameWithoutAWarning",
      "Barcarole",
      "WinnerTakesItAll",
      "Carmen",
      "MusicOfTheNight",
      "LikeAPrayer",
      "InMySecretLife",
      "StillLovinU",
      "TheUnforgiven",
      "WarriorsOfTheWorld",
      "NeverGonnaGiveUUp",
      "ManWhoSoldTheWorld",
      "LaIslaBonita",
      "LetItBe",
      "NoMoreILoveYous",
      "IPronounceUManAndWifi",
      "IdentityTheftForFree",
      "It_burns_when_IP",
      "Troy_and_abed_in_the_modem",
      "TheLANBeforeTime",
      "LongHairedFreakyPeopleNeedNotApply",
      "ImUnderYourBed",
      "WuTangLAN",
      "WIFightTheInevitable",
      "SkynetGlobalDefenseNetwork",
      "Bill_Wi_The_Science_Fi",
      "ALannisterAlwaysSurfsTheNet",
      "FriendlyNeighborhoodSpiderLAN",
      "ClickHereforViruses",
      "MySonIsAHacker",
      "TellMyWifiLoveHer",
      "ConnectAndDie",
      "YoureDoneNow",
      "TopSecretNetwork",
      "PasswordIsPassword",
      "ComeAndCleanUpMyHouse",
      "WiFi10$PerMinute",
      "DontEvenTryIt",
      "Anonymouse",
      "RedHatHacker",
      "GetOffMyLawnYankee",
      "I_Can_See_Your_Pixels",
      "HeyYou",
      "CrazyCatLady",
      "SayMyName",
      "BondageClub",
      "HaHaNextTimeLockYourRouter",
      "HackersConference",
      "IKilledAManOnce",
      "GetYourOwnWiFiLosers",
      "TheBeavisAndButtheadResidence",
      "DavidCameron",
      "TheMysteryVan",
      "PaperAirplanes",
      "IHatePeopleWithAccents",
      "ClickToDonate",
      "IRSBackgroundCheck",
      "ZombieWedding",
      "YourHomeIsBugged",
      "TheyAreWatching",
      "NSAPhoneTapVan",
      "NoFreeInternetHereKeepLooking",
      "IfUBuildIt",
      "NoCreepyClownsHereHaha",
      "ZodiacLetters",
      "MrLecterLookingToHaveAFriendforDinner",
      "99_Problems_But_WIFI_Aint1",
      "ICanHazWireless",
      "LookMaNoWires",
      "YourMusicIsAnnoying",
      "ShutYourDogUpAlready",
      "YouLostYourConnection",
      "VirusWiFi",
      "PorqueFi",
      "WhyFiWhyNot",
      "ToFiOrNotToFi",
      "StopSnooping",
      "TheInternetIsAssur",
      "ICanHearYouSnoreFromOverHere",
      "PleaseUseMe",
      "TakeBackTheEmpire",
      "404NetworkUnavaillable",
      "ICanReadYourEmails",
      "LANofMilkAndHoney",
      "LANDownUnder",
      "ThePromisedLAN",
      "HugsForDrugs",
      "BillNyeTheRussianSpy",
      "TheFastAndTheCurious",
      "AskYoGirlAboutMe",
      "InternetNotUploaded",
      "AsFastAsInternetExplorer",
      "HairyPoppins",
      "SoyMilkBroflakes",
      "ToxicMacho",
      "OldHaciendaJefes",
      "TheBigKahuna",
      "BeenThereDoneThat",
      "Loading…",
      "NameAlreadyInUse",
      "Searching…",
      "NetworkNotFound…",
      "UmbrellaCorporation",
      "UDontNeedPantsfortheVictoryDance",
      "TheyLaughedAtMeSoIKilledThem",
      "Viruses_But_YOLO",
      "MalwareInside",
      "TheRussianGovernment",
      "SnowdenIntelInside",
      "BlackHatCat",
      "TheItchyAndScratchyShow",
      "Lagertha",
      "OneDoesNotSimplyLogIntoMordor",
      "DHARMAInitiative",
      "ZergersGonnaZerg",
      "SpeakFriendAndEnter",
      "PrincessofBelAir",
      "Irecodedthis3times",
      "ShiftingKeys",
      "testingtime",
      "OcuppyInternetStreet",
      "RaidersoftheLostDark",
      "BaldursGateway",
      "Rajastan895",
      "WhiteWalker",
      "WeForgotKevin",
      "TheyCallMeTrinity",
      "Cyberwinter",
      "SilentWinter",
      "NuclearDeath",
      "ToBoldlyGo",
      "TheVoyagerAppolo",
      "PlatinumConundrum",
      "BatmanAndRobbin",
      "HarleyQuinnForQueen",
      "MermaidsDontDoHomework",
      "IAmTheRealZuckerberg",
      "IKnowHowToSpell",
      "ICanTypeReallyFast",
      "TheElderMouseScrolls",
      "WorldOfNetcraft",
      "ThrallforWarchief",
      "gingereinstein",
      "yourdigitalfantasy",
      "QAsniper",
      "P@$$w0rd",
      "JackAndJillRunUpTheHill",
      "MomFreudWouldBeProud",
      "TheyRWatching",
      "DropItLikeItsHotspot",
      "IAmSherlocked",
      "IAmLordVoldemort",
      "MickeyMinnieGoofyPluto",
      "UnfinishedSentenc",
      "OP_rah",
      "CryptoLifehack",
      "HeresJ0hnnY",
      "2SmokingBarrels",
      "ShowMeTheLANey",
      "NoMorePuns",
      "ComeInChosenOne",
      "NathanDrakeScalesWalls",
      "Gr34tPowerGr34tResponsability",
      "MakeLoveNotWarcraft",
      "4chan$ucks",
      "KnightsOftheOldRepublik",
      "MakeStarcraftGreatAgain",
      "ChineseG$$ldFarmer",
      "HoboHoboGoblin",
      "FataMorgana",
      "EagleHasLanded",
      "2$tupidWoofWoof",
      "DickDastardlyFlyBy",
      "NatashaRomanoffIsOff",
      "TheCaffeineBelt",
      "3in4WontGetThis",
      "IAmHeisenberg",
      "lastoneisakeeper4real",
      "Cecinestpasunepassword",
      "LegendOfZelda",
      "TheCakeIsALie",
      "StillPlayAngband",
      "DarkSoulsMasochist",
    ];
    if (len < 6) {
      console.log("you can't make a password of length of 5 characters");
    } else {
      console.log(len);
      let i = 0;
      let final = "";
      while (i < len) {
        if (funny === true) {
          final += funny1[Math.floor(Math.random() * smallChars.length)];
        } else {
          if (small === true) {
            final += smallChars[Math.floor(Math.random() * smallChars.length)];
          }
          if (big === true) {
            final += bigChars[Math.floor(Math.random() * bigChars.length)];
          }
          if (number === true) {
            final += num[Math.floor(Math.random() * num.length)];
          }
          if (special === true) {
            final += spec[Math.floor(Math.random() * spec.length)];
          }
        }
        i += 3;
      }
      return final.slice(0, len);
    }
  }
}

// generate normal password
document.querySelector("#generate81").addEventListener("click", () => {
  let person = new password();
  let v = document.querySelector(".input81").value;
  let a = document.querySelector(".small").checked;
  let b = document.querySelector(".big").checked;
  let c = document.querySelector(".num").checked;
  let d = document.querySelector(".special").checked;
  let e = document.querySelector(".funny").checked;
  let passValue = person.passwordgenerator(v, a, b, c, d, e);
  if (passValue.length > 50) {
    alert("Please pass the input value, below 50 character");
  } else {
    document.querySelector(".pass81").textContent = passValue;
  }
});

/* ^^^^^^^^^^^^^^^^
------------------9th problem------------------
^^^^^^^^^^^^^^^^^*/
let clockDiv = document.querySelector("#clockDiv");
let progress_bar = document.querySelector(".progress-bar");
let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let scd = document.querySelector("#scd");
let dateDiv = document.querySelector("#dateDiv");
let monthDiv = document.querySelector("#monthDiv");
let yearDiv = document.querySelector("#yearDiv");
let dayDiv = document.querySelector("#dayDiv");

setInterval(run, 1000);

function run() {
  //making variables
  let t = new Date();
  let h = t.getHours();
  let m = t.getMinutes();
  let s = t.getSeconds();
  let milliSeconds = t.getMilliseconds();
  let date = t.getDate();
  let month = t.getMonth() + 1;
  let year = t.getFullYear();
  let day = t.getDay();

  //making day element according to 0-7 as monday-sunday
  switch (day) {
    case 1:
      dayDiv.innerHTML = "(Monday)";
      break;
    case 2:
      dayDiv.innerHTML = "(Tuesday)";
      break;
    case 3:
      dayDiv.innerHTML = "(Wednesday)";
      break;
    case 4:
      dayDiv.innerHTML = "(Thursday)";
      break;
    case 5:
      dayDiv.innerHTML = "(Friday)";
      break;
    case 6:
      dayDiv.innerHTML = "(Saturday)";
      break;
    case 7:
      dayDiv.innerHTML = "(Sunday)";
      break;
  }

  //doing chnages
  hrs.innerHTML = h;
  min.innerHTML = m;
  if (s < 10) {
    scd.innerHTML = "0" + s;
  } else {
    scd.innerHTML = s;
  }
  dateDiv.innerHTML = date;
  monthDiv.innerHTML = month;
  yearDiv.innerHTML = year;

  let percentage = (s / 60) * 100;
  progress_bar.style.width = `${percentage}%`;
}

let alarmAudio = new Audio("static/sounds/project 9/alarm.mp3");
let alarmSet = false;
// start btn working
document.querySelector(".alarmBtn").addEventListener("click", () => {
  if (!alarmSet) {
    console.log("start");
    let value = document.querySelector(".alarm9Input").value;
    console.log(value);
    const wait = () => {
      let refreshIntervalId = setInterval(() => {
        if (value <= 0) {
          clearInterval(refreshIntervalId);
          document.querySelector(
            ".info9"
          ).textContent = `your alarm is ringing`;
        } else {
          --value;
          document.querySelector(
            ".info9"
          ).textContent = `Your Alarm will be start in ${value} seconds`;
        }
      }, 1000);
    };
    wait();
    setTimeout(() => {
      document.querySelector(".alarmgif").src =
        "static/images/project 9/alarmGif.gif";
      alarmAudio.loop = true;
      alarmAudio.play();
    }, 1000 * value);
    document.querySelector(".alarm9Input").value = "";
    alarmSet = true;
  }
});
// stop btn working
document.querySelector(".alarmBtn2").addEventListener("click", () => {
  console.log("stop");
  alarmSet = false;
  value = 0;
  document.querySelector(
    ".info9"
  ).textContent = `Please make sure to give a value before staring the alarm :)`;
  document.querySelector(".alarm9Input").value = "";
  document.querySelector(".alarmgif").src =
    "static/images/project 9/alarmPic.png";
  alarmAudio.loop = false;
  alarmAudio.pause();
});
