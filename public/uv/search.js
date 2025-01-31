"use strict";

/**
 * Optimized search function for DuckDuckGo
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

  // If input is not a valid URL, replace the search query placeholder for DuckDuckGo
  return `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;
}
