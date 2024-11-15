//Turn button previous page and next page
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

//contact me functionality
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page,index) => {
        setTimeout(()=>{
            page.classList.add('turn');

            setTimeout(()=>{
                page.style.zIndex = 20 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


//Contact page to 1st page by clicking profile icon(reverse index function)
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber<0){
        pageNumber = totalPages - 1;
    }
}

//Back Profile Button
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(()=>{
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}

//opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');
//cover-right animation
setTimeout(()=>{
    coverRight.classList.add('turn');
}, 2100)
setTimeout(()=>{
    coverRight.style.zIndex = -1;
}, 2800)
setTimeout(()=>{
    pageLeft.style.zIndex = 20;
}, 3200)
//all pages animation
pages.forEach((_, index) => {
    setTimeout(()=>{
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})


function checkScreenSize() {
    const content = document.getElementById('content');

    if (window.innerWidth <= 1024) {
        content.style.display = 'none'; 
      } else {
        content.style.display = 'block';
      }
}

const bodyContent = document.getElementById("content");
const maxMediaQuery = window.matchMedia('(max-width: 1024px)');
