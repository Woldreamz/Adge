//<!-- Add this script tag at the end of your HTML body -->

document.addEventListener('DOMContentLoaded', function () {
    const checkAvailabilityButton = document.querySelector('.b-t-n button');

    checkAvailabilityButton.addEventListener('click', function () {
      const arriveDate = document.getElementById('arrive').value;
      const departDate = document.getElementById('depart').value;
      const guestCount = document.getElementById('guest').value;
      const promoCode = document.getElementById('code').value;

      // Perform basic input validation
      if (!arriveDate || !departDate || !guestCount) {
        alert('Please fill in all required fields.');
        return;
      }

      // Simulate an asynchronous availability check
      simulateAvailabilityCheck(arriveDate, departDate, guestCount, promoCode);
    });

    function simulateAvailabilityCheck(arriveDate, departDate, guestCount, promoCode) {
      // Simulate an asynchronous request (e.g., AJAX/fetch) with a timeout
      setTimeout(function () {
        const isAvailable = Math.random() < 0.8; // Simulate 80% success rate

        if (isAvailable) {
          displaySuccessMessage();
        } else {
          displayErrorMessage();
        }
      }, 1000); // Simulating a 1-second delay
    }

    function displaySuccessMessage() {
      alert('Hooray! The accommodation is available. You can proceed with the booking.');
      // Additional logic for redirection or further actions can be added here
    }

    function displayErrorMessage() {
      alert('Sorry, the accommodation is not available for the selected dates or guests.');
    }
});
