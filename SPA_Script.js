function showPage(pageID) {
    const pages=document.querySelectorAll('.page');

    for (let i=0; i < pages.length;i++) {
        pages[i].classList.remove('show');
    }

    const selectedPage=document.getElementById(pageID);
    selectedPage.classList.add('show')
}
