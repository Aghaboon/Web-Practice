let rating = 0;
let starColor = "blue";

function setRating(selectedRating) {
    if (rating === selectedRating) {
        rating = 0;
    } else {
        rating = selectedRating;
    }

    updateStars();
}

function updateStars() {
    const stars = document.getElementsByClassName("fa fa-star");

    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].classList.add("checked");
        } else {
            stars[i].classList.remove("checked");
        }
    }

    document.getElementById("rating").textContent = rating;
}

function changeColor(color) {
    starColor = color;
    updateStarColor();
}

function updateStarColor() {
    const checkedStars = document.getElementsByClassName("fa fa-star checked");

    for (let i = 0; i < checkedStars.length; i++) {
        checkedStars[i].style.color = starColor;
    }

}

// Initial star color update
updateStarColor();
