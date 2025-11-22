// Function to manage GIF state (stop/start animation)
function manageGifState(pageElement, shouldAnimate) {
    // Find all nav buttons on the page, as they contain the GIFs
    const navButtons = pageElement.querySelectorAll('.navButton');
    
    navButtons.forEach(button => {
        const gifImg = button.querySelector('img');
        if (gifImg) {
            const currentSrc = gifImg.src;
            
            // Find the index of the last dot (.) to separate the base path from the extension
            const lastDotIndex = currentSrc.lastIndexOf('.');
            if (lastDotIndex === -1) return; // Skip if no extension found

            const baseName = currentSrc.substring(0, lastDotIndex);
            
            if (shouldAnimate) {
                // Restore the GIF source
                // Only swap if the image is currently a static placeholder (e.g., .png)
                if (!currentSrc.endsWith('.gif')) {
                    gifImg.src = baseName + '.gif';
                }
            } else {
                // Replace GIF with a static placeholder (e.g., '.png')
                // Only swap if the image is currently the animated GIF
                if (currentSrc.endsWith('.gif')) {
                    // We assume the static version is named the same but with a .png extension.
                    // If you use .jpg, change '.png' below.
                    gifImg.src = baseName + '.png'; 
                }
            }
        }
    });
}


//PAGE NAVIGATION
function showPage(pageID) {
    const pages=document.querySelectorAll('.page');

    for (let i=0; i < pages.length;i++) {
        const page = pages[i];
        if (page.classList.contains('show')) {
            // Stop GIFs on the page that is about to be hidden
            manageGifState(page, false);
        }
        page.classList.remove('show');
    }


    const selectedPage=document.getElementById(pageID);
    selectedPage.classList.add('show');
    
    // Start GIFs on the newly shown page
    manageGifState(selectedPage, true); 
    
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

// Function to calculate and update the count
function updateDayCount(startDate, elementId) {
    const now = new Date().getTime();
    const distance = now - startDate;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const counterElement = document.getElementById(elementId);
    if (counterElement) {
        counterElement.textContent = `${days}  days`;
    }
}

//COUNTER
const startDate = new Date("December 3, 2024 00:00:00").getTime();
updateDayCount(startDate, "dayCount"); // Initial calculation
const t = setInterval(() => {
    updateDayCount(startDate, "dayCount");
}, 60000); // Runs every minute (60000ms)

const talkStartDate = new Date("December 3, 2023 00:00:00").getTime();
updateDayCount(talkStartDate, "talkCounter"); // Initial calculation
const talkCounter = setInterval(() => {
    updateDayCount(talkStartDate, "talkCounter");
}, 60000); // Runs every minute (60000ms)
