// Array of country names
const countries = ['India', 'Paris', 'Japan', 'Bangkok', 'China', 'Malaysia'];

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




//Form validation JavaScript

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
document.getElementById('startDate').setAttribute('min', formattedDate);
document.getElementById('startDate').value = formattedDate;

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    
    if (endDate <= startDate) {
        alert('End date must be greater than start date.');
        return;
    }

    alert('Booking Successful!');
});