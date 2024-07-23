document.addEventListener("DOMContentLoaded", function() {
    var splashScreen = document.getElementById("splash-screen");
    setTimeout(function() {
        splashScreen.classList.add("fade-out");
        setTimeout(function() {
            splashScreen.style.display = "none";
        }, 1000);
    }, 2000);

    var language = localStorage.getItem('language') || 'es';
    document.getElementById("language-select").value = language;

    document.getElementById("acceptCookies").addEventListener("click", function() {
        document.getElementById("cookieConsent").style.display = "none";
        localStorage.setItem('cookiesAccepted', 'true');
    });

    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById("cookieConsent").style.display = "block";
    }

    const themeSelector = document.getElementById('theme-selector');
    themeSelector.addEventListener('change', function() {
        const selectedTheme = themeSelector.value;
        const currentTheme = document.getElementById('theme-stylesheet');
        if (selectedTheme === 'light') {
            currentTheme.setAttribute('href', 'light-theme.css');
        } else {
            currentTheme.setAttribute('href', 'styles.css');
        }
    });
});

function changeLanguage(language) {
    localStorage.setItem('language', language);
    if (language === 'en') {
        window.location.href = "index_en.html";
    } else {
        window.location.href = "index.html";
    }
}

function downloadFile() {
    window.location.href = "TheOpenApps.zip";
}
