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

//COUNTDOWN
const targetDate = new Date("December 3, 2026 00:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
        if (distance > 0) {
        countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
        clearInterval(countdownTimer);
        countdownEl.textContent = "The countdown has ended!";
        }
  }
}, 1000);

//COUNTER

  const startDate = new Date("December 3, 2024 00:00:00").getTime();
  const t = setInterval(()=>{
  const now = new Date().getTime();
  const distance = now - startDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const counterElement = document.getElementById("dayCount");
  if (counterElement) {
    if (distance >= 0) {
      counterElement.textContent = `${days}  days`;
    } else {
      counterElement.textContent = `0 days`;
    }
  }
  },1000)


