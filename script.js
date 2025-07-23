document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const formattedDate = today.toLocaleDateString("hr-HR", options);
  const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  document.getElementById("date").textContent = capitalizedDate;
});
