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
    const materialsRecommendation = document.getElementById("recommendation-materials");
    const descriptionRecommendation = document.getElementById("recommendation-description");

    buttonFinder.forEach((btn) => {
        btn.addEventListener("click", function() {
            const moodKey = this.dataset.mood;
            const data = moodProducts[moodKey];

            if(!data) return;

            buttonFinder.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");

            cardRecommendation.style.opacity = "0.4";


            setTimeout(() => {
                imgRecommendation.src = data.image;
                labelRecommendation.textContent = data.label
                titleRecommendation.textContent = data.title
                materialsRecommendation.textContent = data.materials
                descriptionRecommendation.textContent = data.description

                cardRecommendation.style.opacity = "1";
            }, 150);
        })
    });
})
