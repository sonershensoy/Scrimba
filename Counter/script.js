let tick= 0;
let guestTick = 0;
let boxes = document.querySelector(".plus")
let score = document.querySelector(".js-score")
let guestScore = document.querySelector(".guest-score")


function increment() {
  tick += 1;
  score.textContent = tick;
   
}

function increment2() {
    tick += 2;
    score.textContent = tick;
     
}

function increment3() {
    tick += 3;
    score.textContent = tick;
     
  }

  function incrementGuest() {
    guestTick += 1;
    guestScore.textContent = guestTick;
     
  }
  
  function incrementGuest2() {
      guestTick += 2;
      guestScore.textContent = guestTick;
       
  }
  
  function incrementGuest3() {
      guestTick += 3;
      guestScore.textContent = guestTick;
       
    }