// updateYear.js
(function() {
    const currentYearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
})();
