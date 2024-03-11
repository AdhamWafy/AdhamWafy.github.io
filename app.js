const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("intersect")
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
})

const hiddenObjects = document.querySelectorAll(".hidden");
hiddenObjects.forEach((el) => observer.observe(el));

const observerTextLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("intersect")
        if (entry.isIntersecting){
            entry.target.classList.add("left-part-show");
        }
        else{
            entry.target.classList.remove("left-part-show");
        }
    });
})

const hiddenObjectsTextLeft = document.querySelectorAll(".left-part-hide");
hiddenObjectsTextLeft.forEach((el) => observerTextLeft.observe(el));

const observerTextRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("intersect")
        if (entry.isIntersecting){
            entry.target.classList.add("right-part-show");
        }
        else{
            entry.target.classList.remove("right-part-show");
        }
    });
})

const hiddenObjectsTextRight = document.querySelectorAll(".right-part-hide");
hiddenObjectsTextRight.forEach((el) => observerTextRight.observe(el));