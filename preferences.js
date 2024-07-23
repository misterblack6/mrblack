document.addEventListener("DOMContentLoaded", function() {
    // Check if theme preference is stored in cookies
    var theme = getCookie("theme");
    if (theme) {
        document.getElementById("theme-style").href = theme + "-theme.css";
    }

    // Check if language preference is stored in cookies
    var language = getCookie("language");
    if (language) {
        document.getElementById("language-select").value = language;
    }

    // Add event listener to language select element
    document.getElementById("language-select").addEventListener("change", function() {
        var selectedLanguage = this.value;
        // Store language preference in cookies
        setCookie("language", selectedLanguage, 30);
        // Redirect to the corresponding page in the selected language
        window.location.href = selectedLanguage + "-index.html";
    });
});

// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
