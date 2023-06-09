const imageL = document.querySelectorAll(".benefits-img-left");
const imageR = document.querySelector(".benefits-img-right");
const darkgradient = document.querySelector(".dark-gradient");

const creditCard = document.querySelector(".emerald-card");
const featuresInfo = document.querySelector(".features-list");
const advertTitle = document.querySelector(".advert-title");

const tableItem1 = document.querySelector(".table-item-1");
const tableItem2 = document.querySelector(".table-item-2");
const tableItem3 = document.querySelector(".table-item-3");

const story1 = document.querySelector(".story-1");
const story2 = document.querySelector(".story-2");

const item1observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
            entry.target.classList.toggle("dropping-card", entry.isIntersecting);
        }
        else {
            entry.target.classList.remove("dropping-card");
        }
    }, {
        threshold: 1
    })
})

const item2observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
            entry.target.classList.toggle("lifting-card", entry.isIntersecting);
        }
        else {
            entry.target.classList.remove("lifting-card");
        }
    }, {
        threshold: 1
    })
})

const item3observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
            entry.target.classList.toggle("dropping-last-card", entry.isIntersecting);
        }
        else {
            entry.target.classList.remove("dropping-last-card");
        }
    }, {
        threshold: 1
    })
    
})

item1observer.observe(tableItem1);
item2observer.observe(tableItem2);
item3observer.observe(tableItem3);

const leftobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("benefitsanimationleft", entry.isIntersecting);
    })
    
})

const rightobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("benefitsanimationright", entry.isIntersecting);
    })
})

const gradientobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("gradient-fade", entry.isIntersecting);
    })
})

const titleobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("cardtitle", entry.isIntersecting);
    })
})

const cardobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("cardslidein", entry.isIntersecting);
    })
})

const listobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("listfloat", entry.isIntersecting);
    }, 
    {
        threshold: 1
    })
})


const story1observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
            entry.target.classList.toggle("slideleft", entry.isIntersecting);
        }
        else {
            entry.target.classList.remove("slideleft");
        }
    }, {
        threshold: 1
    })
})

const story2observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
            entry.target.classList.toggle("slideright", entry.isIntersecting);
        }
        else {
            entry.target.classList.remove("slideright");
        }
    }, {
        threshold: 1
    })
})

story1observer.observe(story1);
story2observer.observe(story2);


titleobserver.observe(advertTitle);

cardobserver.observe(creditCard);
listobserver.observe(featuresInfo);

gradientobserver.observe(darkgradient);

imageL.forEach(image => {
    leftobserver.observe(image)
})

rightobserver.observe(imageR);
