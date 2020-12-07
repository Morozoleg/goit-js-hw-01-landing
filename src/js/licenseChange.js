import refs from './refs';

refs.license.addEventListener('change', handleLicenseChange);

function handleLicenseChange(event) {
  refs.btn.disabled = !event.target.checked;
}
