// Star Rating System
const stars = document.querySelectorAll(".star");
const ratingOutput = document.getElementById("rating-output");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-value");

    // Reset all stars
    stars.forEach((s) => s.classList.remove("selected"));

    // Highlight selected stars
    star.classList.add("selected");
    let prevSibling = star.previousElementSibling;
    while (prevSibling) {
      prevSibling.classList.add("selected");
      prevSibling = prevSibling.previousElementSibling;
    }

    // Show rating
    ratingOutput.textContent = `Your rating: ${rating} star${rating > 1 ? "s" : ""}`;
  });
});

// Pie Chart for Service Distribution
const canvas = document.getElementById("pieChart");
const ctx = canvas.getContext("2d");

// Generate random data for services
const serviceData = {
  "Web Development": Math.random() * 50 + 10,
  "UI/UX Design": Math.random() * 30 + 10,
  "Mobile Apps": Math.random() * 20 + 5,
  "Data Analytics": Math.random() * 15 + 5,
  "AI Solutions": Math.random() * 10 + 2,
};

// Extract labels and data
const labels = Object.keys(serviceData);
const data = Object.values(serviceData);

// Colors for pie slices
const colors = ["#3498db", "#6c5ce7", "#ffcc00", "#e74c3c", "#2ecc71"];

// Draw Pie Chart
let startAngle = 0;
data.forEach((value, index) => {
  const sliceAngle = (value / data.reduce((a, b) => a + b)) * 2 * Math.PI;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    Math.min(canvas.width / 2, canvas.height / 2),
    startAngle,
    startAngle + sliceAngle
  );
  ctx.closePath();
  ctx.fillStyle = colors[index];
  ctx.fill();
  startAngle += sliceAngle;
});

// Add legend dynamically
const legendContainer = document.createElement("div");
legendContainer.style.textAlign = "center";
document.querySelector("#contact").appendChild(legendContainer);

labels.forEach((label, index) => {
  const legendItem = document.createElement("div");
  legendItem.innerHTML = `<span style="display:inline-block;width:15px;height:15px;background-color:${colors[index]};margin-right:10px;"></span> ${label}`;
  legendContainer.appendChild(legendItem);
});
