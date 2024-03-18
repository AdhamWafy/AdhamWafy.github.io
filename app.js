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

if (localStorage.getItem("mode") == "dark"){
    body.classList.add("dark")
    body.classList.remove("root")
}
else{
    body.classList.remove("dark")
    body.classList.add("root")
}

function Switch(){
    body = document.getElementById("body");
    if (body.classList.contains("dark"))
    {
        body.classList.remove("dark")
        body.classList.add("root")
        localStorage.setItem("mode", "root")
    }
    else{
        body.classList.add("dark")
        body.classList.remove("root")
        localStorage.setItem("mode", "dark")
    }
}

//Cursor Check

const card = document.getElementById("card");
card.onmousemove = e => {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const X = e.clientX - rect.left;
    const Y = e.clientY - rect.top;
    card.style.setProperty("--Xpos", `${X}px`)
    card.style.setProperty("--Ypos", `${Y}px`)
    console.log(X);
}
