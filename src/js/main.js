const audioRain = document.getElementById("ambient-audio");
const heroBadge = document.querySelector(".audio");
const heroButton = document.querySelector(".badge button");
const philoBadge = document.querySelector(".sound");
const philoButton = document.querySelector(".sound button");

let isPlaying = false;


function updateAudioUI(playing) {
  if (playing) {
    
    if (heroBadge) heroBadge.classList.add("active");
    if (heroButton) heroButton.textContent = "🔊 Suara Hujan & Api Lilin";

    if (philoBadge) philoBadge.classList.add("active");
    if (philoButton) philoButton.textContent = "🔊 Hentikan Suara";
  } else {
    
    if (heroBadge) heroBadge.classList.remove("active");
    if (heroButton) heroButton.textContent = "🔉 Putar Suara Hujan & Api Lilin";

    if (philoBadge) philoBadge.classList.remove("active");
    if (philoButton) philoButton.textContent = "🔉 Putar Suara";
  }
}


function toggleAudio() {
  if (!audioRain) return;

  if (!isPlaying) {
    audioRain.play()
      .then(() => {
        isPlaying = true;
        updateAudioUI(true);
      })
      .catch((err) => console.warn("Audio play blocked by browser:", err));
  } else {
    audioRain.pause();
    isPlaying = false;
    updateAudioUI(false);
  }
}


if (heroBadge) heroBadge.addEventListener("click", toggleAudio);
if (philoBadge) philoBadge.addEventListener("click", toggleAudio);


// Data Product for Mood Finder
const moodProducts = {
  tidur: {
    label: "98% MATCH FOR YOUR MOOD",
    title: "Malam Hening",
    materials: "LAVENDER · CHAMOMILE · CEDARWOOD",
    description:
      "Aroma lavender dan kayu cedar yang menenangkan saraf, menciptakan suasana tenang untuk membantumu lepas dari kelelahan seharian.",
    image: "src/assets/images/malam-hening.jpg",
  },
  fokus: {
    label: "91% MATCH FOR YOUR MOOD",
    title: "Embun Rumpun",
    materials: "EUCALYPTUS · PEPPERMINT · CITRUS",
    description:
      "Kombinasi segar eucalyptus dan peppermint yang menjernihkan pikiran, meningkatkan fokus saat ngoding, dan menjaga energi tetap stabil.",
    image: "src/assets/images/embun-rumpun.jpg",
  },
  stres: {
    label: "94% MATCH FOR YOUR MOOD",
    title: "Tanah Basah",
    materials: "PATCHOULI · BERGAMOT · SANDALWOOD",
    description:
      "Vetiver menurunkan tempo napas, aroma tanah basah menandai malam sudah selesai. Nyalakan 30 menit sebelum tidur.",
    image: "src/assets/images/tanah-basah.jpg",
    link: "#product-tanah-basah",
  },
  santai: {
    label: "93% MATCH FOR YOUR MOOD",
    title: "Senja Teduh",
    materials: "VANILLA · CINNAMON · AMBER",
    description:
      "Sentuhan manis vanilla dan kehangatan rempah yang lembut, sempurna menemani secangkir kopi, membaca buku, atau rehat di akhir pekan.",
    image: "src/assets/images/senja-teduh.jpg",
  },
};

// Logic Finder Product by Mood
document.addEventListener("DOMContentLoaded", () => {
  const buttonFinder = document.querySelectorAll(".button-finder button");
  const cardRecommendation = document.getElementById("recommendation-card");
  const imgRecommendation = document.getElementById("recommendation-img");
  const titleRecommendation = document.getElementById("recommendation-title");
  const labelRecommendation = document.getElementById("recommendation-label");
  const materialsRecommendation = document.getElementById(
    "recommendation-materials",
  );
  const descriptionRecommendation = document.getElementById(
    "recommendation-description",
  );

  buttonFinder.forEach((btn) => {
    btn.addEventListener("click", function () {
      const moodKey = this.dataset.mood;
      const data = moodProducts[moodKey];

      if (!data) return;

      buttonFinder.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      cardRecommendation.style.opacity = "0.4";

      setTimeout(() => {
        imgRecommendation.src = data.image;
        labelRecommendation.textContent = data.label;
        titleRecommendation.textContent = data.title;
        materialsRecommendation.textContent = data.materials;
        descriptionRecommendation.textContent = data.description;

        cardRecommendation.style.opacity = "1";
      }, 150);
    });
  });
});

// Logic Filter Product Section
const filterButtons = document.querySelectorAll("button.filter");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const selectedFilter = this.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    productCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (selectedFilter === "all" || cardCategory.includes(selectedFilter)) {
        card.classList.remove("hidden");

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.classList.add("hidden");
        }, 200);
      }
    });
  });
});
