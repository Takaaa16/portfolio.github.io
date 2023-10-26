$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

const movingImage = document.getElementById("moving-image");

let isMovingUp = true;
const moveSpeed = 2;

function moveImage() {
  const currentPosition = parseInt(movingImage.style.top) || 0;

  if (isMovingUp) {
    if (currentPosition > 0) {
      isMovingUp = false;
    } else {
      movingImage.style.top = currentPosition + moveSpeed + "px";
    }
  } else {
    if (currentPosition < -10) {
      isMovingUp = true;
    } else {
      movingImage.style.top = currentPosition - moveSpeed + "px";
    }
  }
}

setInterval(moveImage, 100);

document.addEventListener("DOMContentLoaded", function () {
  const text = "Burhani Sulthon"; // Kata-kata yang akan ditampilkan
  const header = document.getElementById("typing-header");
  let index = 0;

  function typeText() {
    header.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
      setTimeout(typeText, 50); // Ganti dengan delay yang diinginkan
    }
  }

  typeText(); // Memulai animasi ketika dokumen telah siap
});
