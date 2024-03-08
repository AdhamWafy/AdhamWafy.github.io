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