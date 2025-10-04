export function toggleDropdown(content) {
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
}