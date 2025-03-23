// Task
// Build a simple dog image gallery that fetches three random dog images from https://dog.ceo/api/breeds/image/random in parallel using a Promise method.
// Clicking the "Get Dogs" button should display three new random images in the UI.
// Clear previous images before displaying new ones.
// Handle errors if fetching fails.

document.getElementById("fetchDogsBtn").addEventListener("click", fetchDogs);

async function fetchDogs() {
  try {
    const urls = [
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
    ];

    // Write code here...
    
  } catch (error) {
    alert("Error fetching dog images: " + error.message);
  }
}
