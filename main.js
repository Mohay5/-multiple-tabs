const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

function showTab(tabIndex) {
  // Hide all tab contents
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove('active');
  });

  // Show the selected tab content
  tabContents[tabIndex].classList.add('active');

  // Set the active class for the selected tab link
  tabLinks.forEach((tabLink) => {
    tabLink.classList.remove('active');
  });
  tabLinks[tabIndex].classList.add('active');
}

// Show the first tab by default
showTab(0);

// Add click event listeners to the tab links
tabLinks.forEach((tabLink, index) => {
  tabLink.addEventListener('click', () => {
    showTab(index);
  });
});
