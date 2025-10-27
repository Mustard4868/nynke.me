window.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input-area");

  // Focus the editable span
  input.focus();

  // Handle Enter key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // stop line break
      console.log("User typed:", input.textContent);
      input.textContent = ""; // clear for next command
    }
  });
});
