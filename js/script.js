// Modal code.

const modal = document.getElementById("modal");

function showDialog() {
  // document.body.style.overflow="hidden"
  modal.showModal();
}

function closeDialog() {
  modal.close();
  // document.body.style.overflow="auto"
}

// User and talent tabs switching code.

const tabs = document.querySelectorAll(".tab-btns > button");
let content = document.querySelectorAll(".tab-content");
// console.log(tabs);
tabs.forEach((tab, i) => {
  // console.log(tab);
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    content.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});
 
// User rewards

let rewardData = [
    "User receives 25% of total beans pot",
    "User receives 20% of total beans pot",
    "User receives 15% of total beans pot",
    "User receives 10% of total beans pot",
    "User receives 5% of total beans pot ",
  ];
  let ranks = ["TOP 1", "TOP 2", "TOP 3", "TOP 4", "TOP 5-10"];
  
  let leftArrow = document.querySelector(".left");
  let rightArrow = document.querySelector(".right");
  let rewardText = document.querySelector(".reward-text");
  
  let prizes = document.querySelectorAll(".prizes-1");
  let rewardContainer = document.querySelector(".rewards");
  let currentId = +rewardContainer.getAttribute("data-current");
  let rank = document.querySelector(".reward-top span");
  // console.log(currentId);
  
  // console.log(prizes);
  rightArrow.addEventListener("click", () => {
    let currentPrize = document.querySelector(".prizes-1.active");
    let rank = document.querySelector(".reward-top span");
    if (
      currentPrize.nextElementSibling &&
      currentPrize.nextElementSibling.classList.contains("prizes-1")
    ) {
      currentPrize.nextElementSibling.classList.add("active");
      currentId += 1;
      rank.innerHTML = ranks[currentId];
    } else {
      prizes[0].classList.add("active");
      currentId = 0;
      rank.innerHTML = ranks[currentId];
    }
    currentPrize.classList.remove("active");
    rewardContainer.setAttribute("data-current", currentId);
    rewardText.innerHTML = rewardData[currentId];
  });

  leftArrow.addEventListener("click", () => {
    let currentPrize = document.querySelector(".prizes-1.active");
  
    if (
      currentPrize.previousElementSibling &&
      currentPrize.previousElementSibling.classList.contains("prizes-1")
    ) {
      // console.log(currentPrize.previousElementSibling);
      currentPrize.previousElementSibling.classList.add("active");
      currentId -= 1;
      rank.innerHTML = ranks[currentId];
    } else {
      prizes[prizes.length - 1].classList.add("active");
      currentId = prizes.length - 1;
      rank.innerHTML = ranks[currentId];
      // console.log(currentId);
    }
    currentPrize.classList.remove("active");
    rewardContainer.setAttribute("data-current", currentId);
    rewardText.innerHTML = rewardData[currentId];
  });

//  Talent Rewards Round-1

const TalentRewardR1 = [
    "15 days PK STAR BADGE + Audio theme of PK combat + PK SUperStar Profile Frame",
    "10 days Audio theme of PK combat + PK SUperStar Profile Frame ",
    "07 days Audio theme of PK combat + PK SUperStar Profile Frame ",
    "5 days Audio theme of PK combat",
  ];
  
  const TalentRanks1 = [
    "10 Million & Above Gems",
    "05- 10 Million Gems",
    "03- 05 Million Gems",
    "01- 03 Million Gems",
  ];
  
  let prizesR1 = document.querySelectorAll(".prizesR1");
  let leftArrow1 = document.querySelector(".left-1 ");
  let rightArrow1 = document.querySelector(".right-1 ");
  let rewardText1 = document.querySelector(".reward-text-1");
  let rewardContainer1 = document.querySelector(".r1");
  let currentId1 = +rewardContainer1.getAttribute("data-current");
  let rank1 = document.getElementById("reward-top1");
  // console.log(prizesR1)
  
  rightArrow1.addEventListener("click", () => {
    let currentPrize = document.querySelector(".prizesR1.active");
  
    if (
      currentPrize.nextElementSibling &&
      currentPrize.nextElementSibling.classList.contains("prizesR1")
    ) {
      currentPrize.nextElementSibling.classList.add("active");
      currentId1 += 1;
      rank1.innerHTML = TalentRanks1[currentId1];
    } else {
      prizesR1[0].classList.add("active");
      currentId1 = 0;
      rank1.innerHTML = TalentRanks1[currentId1];
    }
    currentPrize.classList.remove("active");
    rewardContainer1.setAttribute("data-current", currentId1);
    rewardText1.innerHTML = TalentRewardR1[currentId1];
  });
  
  // console.log(prizesR1.length);
  
  leftArrow1.addEventListener("click", () => {
    let currentPrize = document.querySelector(".prizesR1.active");
  
    if (
      currentPrize.previousElementSibling &&
      currentPrize.previousElementSibling.classList.contains("prizesR1")
    ) {
      // console.log(currentPrize.previousElementSibling);
      currentPrize.previousElementSibling.classList.add("active");
      currentId1 -= 1;
      rank1.innerHTML = TalentRanks1[currentId1];
    } else {
      prizesR1[prizesR1.length - 1].classList.add("active");
      currentId1 = prizesR1.length - 1;
      rank1.innerHTML = TalentRanks1[currentId1];
      console.log(currentId1);
    }
    currentPrize.classList.remove("active");
    rewardContainer1.setAttribute("data-current", currentId1);
    rewardText1.innerHTML = TalentRewardR1[currentId1];
  });
  

//   Schedule section

const tabs1 = document.querySelectorAll(" .tab1");
const scontent = document.querySelectorAll(".talent-rewards2 > div");

tabs1.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabs1.forEach((t) => {
      t.classList.remove("active");
    });

    scontent.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });

    tab.classList.add("active");
  });
});
