const button = document.getElementById("openBtn");
const images = document.querySelectorAll(".surprise-img");

button.addEventListener("click", () => {
  button.disabled = true;
  let index = 0;

  const interval = setInterval(() => {
    if (index >= images.length) {
      clearInterval(interval);
      return;
    }

    images[index].style.display = "block";
    index++;
  }, 1000);
});
