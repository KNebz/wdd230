
// get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-srcset]");

//optional parameters being set for the IntersecionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px" 
};

const loadImages = (image) => {
    image.setAttribute('srcset', image.getAttribute('data-srcset'));
    image.onload = () => {image.removeAttribute('data-srcset');};
};

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

const visitDisplay = document.querySelector(".visitDisplay");

let currentVisit = new Date(2022, 11, 05);
console.log(currentVisit);
let previousVisit = Date.parse(window.localStorage.getItem("visitDate"));
console.log(previousVisit);

let visitTime = (currentVisit.getTime() - previousVisit) / (1000 * 3600 * 24);

console.log(visitTime);

visitDisplay.textContent = visitTime;

localStorage.setItem("visitDate", currentVisit);
