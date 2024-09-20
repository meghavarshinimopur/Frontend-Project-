// Array of country names
const countries = ['India', 'Paris', 'Japan', 'Bangkok', 'New York', 'Malaysia'];

// Function to change the country name
function changeCountryName() {
    const placenameElement = document.getElementById('placename');
    let index = 0;

    setInterval(() => {
        placenameElement.textContent = countries[index];
        index = (index + 1) % countries.length;
    }, 200); // Change every 0.2 seconds
}

// Run the function on page load
window.onload = changeCountryName;