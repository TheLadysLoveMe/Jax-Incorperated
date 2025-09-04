"use strict";

/**
 * Optimized Service Worker registration
 */
const stockSW = "/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];

async function registerSW() {
  if (!navigator.serviceWorker) {
    throw new Error("Service workers are not supported in this browser.");
  }

  // Only register service worker on allowed hostnames or when HTTPS is used
  if (
    location.protocol !== "https:" &&
    !swAllowedHostnames.includes(location.hostname)
  ) {
    throw new Error("Service workers require HTTPS or allowed local hostname.");
  }

  // Register the service worker
  await navigator.serviceWorker.register(stockSW, { scope: __uv$config.prefix });
}
