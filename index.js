document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const accountInfo = document.getElementById('accountInfo');
  
    toggleButton.addEventListener('change', function () {
      if (toggleButton.checked) {
        // Toggle to asterisks
        toggleAsterisks(accountInfo, true);
      } else {
        // Toggle back to normal view
        toggleAsterisks(accountInfo, false);
      }
    });
  });
  
  function toggleAsterisks(element, hideText) {
    const paragraphs = element.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
      const text = paragraph.textContent.trim();
      paragraph.textContent = hideText ? '*'.repeat(text.length) : text;
    });
  }