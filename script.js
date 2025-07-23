document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const formattedDate = today.toLocaleDateString("hr-HR", options);
  document.getElementById("date").textContent = formattedDate;
});
