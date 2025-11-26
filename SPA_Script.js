//PAGE NAVIGATION
function showPage(pageID) {
    const pages=document.querySelectorAll('.page');

    for (let i=0; i < pages.length;i++) {
        pages[i].classList.remove('show');
    }
    const selectedPage=document.getElementById(pageID);
    selectedPage.classList.add('show');
    selectedPage.scrollTo(0, 0);
    window.scrollTo(0, 0);
}

//MINI QUIZ
const noBtn = document.getElementById("no");
const container = document.getElementById("container");

noBtn.addEventListener("click", () => {
    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * (containerRect.width - btnWidth));
    const randomY = Math.floor(Math.random() * (containerRect.height - btnHeight));

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

//COUNTER
const startDate = new Date("December 3, 2024 00:00:00").getTime();
const t = setInterval(()=>{
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const counterElement = document.getElementById("dayCount");
    if (counterElement) {
        counterElement.textContent = `${days}  days`;
    }
},1000)

const talkStartDate = new Date("December 3, 2023 00:00:00").getTime();
const talkCounter = setInterval(()=>{
    const now = new Date().getTime();
    const distance = now - talkStartDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const talkCounterElement = document.getElementById("talkCounter");
    if (talkCounterElement) {
        talkCounterElement.textContent = `${days} days`;
    }
},1000);
