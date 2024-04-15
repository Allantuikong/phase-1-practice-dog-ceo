// Fetch and Display Dog Images
document.addEventListener("DOMContentLoaded", () => {
  let breeds;

  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((data) => {
      const images = data.message;
      const container = document.querySelector("#dog-image-container");

      images.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        container.appendChild(img);
      });
    })
    .catch((error) => {
      console.error("Can't fetch images:", error);
    });

  // Fetch and Display Dog Breeds
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      breeds = Object.keys(data.message);
      const ul = document.querySelector("#dog-breeds");

      breeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        ul.appendChild(li);

        li.addEventListener("click", () => {
          li.style.color = "gold";
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching breeds:", error);
    });

  const dropDown = document.querySelector("#breed-dropdown");
  dropDown.addEventListener("change", (e) => {
    const selectedLetter = e.target.value.toLowerCase();
    const ul = document.querySelector("#dog-breeds");
    const filteredBreeds = breeds.filter((breed) =>
      breed.startsWith(selectedLetter)
    );

    ul.innerHTML = "";

    filteredBreeds.forEach((breed) => {
      const li = document.createElement("li");
      li.textContent = breed;
      ul.appendChild(li);
    });
  });
});
