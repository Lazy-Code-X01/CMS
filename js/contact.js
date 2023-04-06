const phoneInput = document.getElementById('phone');
const countryCodeSelect = document.getElementById('country-code');

countryCodeSelect.addEventListener('change', () => {
    const countryCode = countryCodeSelect.value;
    const phoneNumber = phoneInput.value;

  if (phoneNumber.startsWith('+')) {
    // If phone number already has a country code, replace it
    phoneInput.value = countryCode + phoneNumber.slice(2);
  } else {
    // Otherwise, prepend the country code to the phone number
    phoneInput.value = countryCode + phoneNumber;
  }
});
