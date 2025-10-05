
const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const generateBtn = document.getElementById("generateBtn");
const captionText = document.getElementById("captionText");
const loading = document.getElementById("loading");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImage.src = reader.result;
      previewImage.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

generateBtn.addEventListener("click", async () => {
  if (!imageInput.files[0]) {
    captionText.textContent = "⚠️ Please upload an image first.";
    return;
  }

  captionText.textContent = "";
  loading.style.display = "block";

  // Simulating AI caption generation
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Random funny captions (replace later with AI API)
  const captions = [
    "A masterpiece in pixels 🎨",
    "When your camera accidentally takes a good photo 📸",
    "Looks like a future meme template 😎",
    "I see beauty, I see chaos, I see... art.",
    "AI says: wow, that lighting tho 💡"
  ];

  const randomCaption = captions[Math.floor(Math.random() * captions.length)];

  loading.style.display = "none";
  captionText.textContent = randomCaption;
});
