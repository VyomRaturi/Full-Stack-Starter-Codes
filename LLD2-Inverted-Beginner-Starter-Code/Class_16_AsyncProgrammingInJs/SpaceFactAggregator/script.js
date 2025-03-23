// Your mission is to create a Space Facts Aggregator that fetches interesting facts about space from multiple free APIs. Since APIs can sometimes be slow or unreliable, you’ll use Promise.any() to fetch data from three different sources at once and display the first successful response.

// 🔹 User Flow:
// 1️⃣ The user clicks the "Get Space Fact" button.
// 2️⃣ The app sends three simultaneous API requests to fetch space facts.
// 3️⃣ The first successful API response is displayed on the screen.
// 4️⃣ If all APIs fail, an error message is shown instead.

// If the first API returns a fact, display the "explanation" key as "🌌 NASA Fact: [fact]".
// If the second API returns a fact, display the "summary" key as "🚀 SpaceX: [fact]".
// If the third API returns a fact, display the number of astronauts in space as "👨‍🚀 There are currently [number] astronauts in space!".



document.getElementById("fetchFactBtn").addEventListener("click", fetchSpaceFact);

async function fetchSpaceFact() {
  const factContainer = document.getElementById("factContainer");
  factContainer.innerHTML = "<p>Loading fact...</p>";

  const api1 = fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(res => res.json());
  const api2 = fetch("https://api.spacexdata.com/v4/company").then(res => res.json());
  const api3 = fetch("http://api.open-notify.org/astros.json").then(res => res.json());

  try {

    // Write code here

  } catch (error) {
    factContainer.style.display = "block";
    factContainer.innerHTML = "<p>Failed to fetch space facts. Try again later.</p>";
  }
}
