const progress = document.getElementById("progress")
const progress = document.getElementById("prev")
const progress = document.getElementById("next")
const progress = document.getElementById(".circle")


let currentActive = 1


next.addEventListener("click", () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    PaymentRequestUpdateEvent()

})

prev.addEventListener("click", () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    PaymentRequestUpdateEvent()
})


function update() {
    circles.forEach((circle, idx) = > {
        if(idx < currentActive) {
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")

    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + "%"

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive == circles.length){
        next.disabled = true 
    } else{
        prev.disabled = false
        next.disabled = false
    }

}







