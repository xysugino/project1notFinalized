//DATA
const grossData = {
  darkKnight: "$1,081,153,097",
  interstellar: "$701,729,206",
  joker: "$1,074,445,730",
  spiritedAway: "274,925,095",
  deadMansChest: "$1,066,179,747",
  harryPotter: "1,022,290,019",
  avatar: "$2,847,397,339",
  frozen: "$1,281,508,100",
  skyfall: "$1,108,569,499",
  endgame: "$2,797,501,328",
};

//INITIALIZING ELEMENTS
const background = document.querySelector("main");
const image = document.querySelectorAll("img");
const btnHigher = document.querySelectorAll(".btnHigh");
const btnLower = document.querySelectorAll(".btnLow");
const btns = document.querySelectorAll(".buttons");
const btnNext = document.querySelectorAll(".nextButton");

const movie = document.querySelectorAll(".movie");
const grossNextContainer = document.querySelectorAll(".gross-next-container");

const grossValue = document.querySelectorAll(".gross-value");
const thankYou = document.querySelector(".thankYou");
const correct = document.querySelector(".circle");
const wrong = document.querySelector(".cross");
// console.log(grossValue[0].textContent);
// const num = grossValue[0].textContent.replace(/,/g, "").slice(1);

// console.log(num);
console.log(grossValue);
let score = 0;
let scoreTracker = document.querySelector(".scoreTracker");
scoreTracker.textContent = `Score: ${score}`;

const length = grossValue.length;
console.log(length);
btnHigher.forEach((button, i) => {
  button.addEventListener("click", function () {
    //HIDE BUTTONS
    btns[i].classList.add("hidden");
    //DISPLAY STATS AND NEXT BUTTTON
    const speed = 400;

    const updateCount = () => {
      const target = +grossValue[i + 1].getAttribute("data-target");
      const count = +grossValue[i + 1].innerText;
      console.log(count);
      console.log(target);
      const inc = target / speed;
      console.log(inc);

      if (count < target) {
        grossValue[i + 1].innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        console.log(grossData[image[i].alt]);
        grossValue[i + 1].innerText = grossData[image[i].alt];
      }
    };
    updateCount();

    grossNextContainer[i].classList.remove("hidden");

    const movieLeft = Number(
      // grossValue[i].textContent.replace(/,/g, "").slice(1)
      grossData[image[i - 1].alt].replace(/,/g, "").slice(1)
    );
    const movieRight = Number(
      // grossValue[i + 1].textContent.replace(/,/g, "").slice(1)
      grossData[image[i].alt].replace(/,/g, "").slice(1)
    );
    console.log(movieLeft, movieRight);
    if (movieRight > movieLeft) {
      //Change background color
      // background.classList.add("correct");
      //UPDATE SCORE
      correct.classList.remove("hidden");
      score++;
      scoreTracker.textContent = `Score: ${score}`;
    } else {
      wrong.classList.remove("hidden");
      //UPDATE SCORE
      score = 0;
      scoreTracker.textContent = `Score: ${score}`;
    }
  });
});

btnLower.forEach((button, i) => {
  button.addEventListener("click", function () {
    //HIDE BUTTONS
    console.log(i);
    btns[i].classList.add("hidden");
    //DISPLAY STATS AND NEXT BUTTTON
    const speed = 400;

    const updateCount = () => {
      const target = +grossValue[i + 1].getAttribute("data-target");
      const count = +grossValue[i + 1].innerText;
      console.log(count);
      console.log(target);
      const inc = target / speed;
      console.log(inc);

      if (count < target) {
        grossValue[i + 1].innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        console.log(grossData[image[i].alt]);
        grossValue[i + 1].innerText = grossData[image[i].alt];
      }
    };
    updateCount();
    grossNextContainer[i].classList.remove("hidden");
    const movieLeft = Number(
      grossData[image[i - 1].alt].replace(/,/g, "").slice(1)
    );
    const movieRight = Number(
      grossData[image[i].alt].replace(/,/g, "").slice(1)
    );
    console.log(movieLeft, movieRight);
    console.log(movieRight < movieLeft);
    if (movieRight < movieLeft) {
      //Change background color
      // console.log("correct");
      // background.classList.add("correct");
      correct.classList.remove("hidden");

      //UPDATE SCORE
      score++;
      scoreTracker.textContent = `Score: ${score}`;
    } else {
      console.log("incorrect");
      // background.classList.add("incorrect");
      wrong.classList.remove("hidden");
      //UPDATE SCORE
      score = 0;
      scoreTracker.textContent = `Score: ${score}`;
    }
  });
});

btnNext.forEach((button, i) => {
  button.addEventListener("click", function () {
    if (i === length - 2) {
      movie[i - 1].classList.add("hidden");
      movie[i].classList.add("hidden");
      thankYou.classList.remove("hidden");
    } else {
      //REMOVE MOVIE ON LEFT SIDE
      console.log(movie);
      console.log(i);
      movie[i - 1].classList.add("hidden");
      //REMOVE NEXT BUTTON ON LEFT SIDE
      btnNext[i].classList.add("hidden");

      //ADD MOVIE ON RIGHT SIDE
      movie[i + 1].classList.remove("hidden");
      //Remove Wrong or right sign
      correct.classList.add("hidden");
      wrong.classList.add("hidden");
    }
  });
});
