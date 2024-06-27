"use strict";

// Get a cookie value by name
const getCookieByName = (name) => {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return null; // Return null if the cookie is not found
};

// Set a cookie with a given name, value, and optional days until expiration
const setCookie = (name, value, days = 7) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const cookieValue =
    encodeURIComponent(value) +
    `; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `${name}=${cookieValue}`;
};

// Delete a cookie by setting its expiration to a past date
const deleteCookie = (name) => {
  setCookie(name, "", -1);
};

// Redirect to a new page
const goToPage = (url) => {
  window.location.href = url;
};
