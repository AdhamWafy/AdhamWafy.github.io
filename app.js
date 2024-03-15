//Detect if on screen
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

//Switch Function

function Switch(){
    body = document.getElementById("body");
    if (body.classList.contains("dark"))
    {
        body.classList.remove("dark")
        body.classList.add("root")
    }
    else{
        body.classList.add("dark")
        body.classList.remove("root")
    }
}