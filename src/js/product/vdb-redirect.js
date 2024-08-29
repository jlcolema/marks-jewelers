export default function vdbRedirect() {
  // eslint-disable-next-line no-undef
  if (vendorType.toLowerCase() === 'vdb') {
    window.location.href = '/cart';
  }
}
