"use strict";

/**
 * Optimized search function
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL or search query
 */
function search(input, template) {
  // Check if input is a valid URL using a regex
  const urlPattern = /^(https?:\/\/)?([\w-]+\.[\w-]+)(\/[\w\-\.~!$&'()*+,;=]*)?(\?[;&a-z\-_=+%]*)?(\#\w+)?$/i;
  
  if (urlPattern.test(input)) {
    return new URL(input).toString(); // Valid URL
  }

  // Handle invalid URL by replacing the search query placeholder
  return template.replace("%s", encodeURIComponent(input));
}
