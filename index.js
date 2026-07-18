// ==========================================
// THEME SWITCHER LOGIC
// ==========================================
const themeToggleBtn = document.getElementById("theme-toggle");

// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    setLightTheme();
} else if (savedTheme === "dark") {
    setDarkTheme();
} else {
    // Default fallback: match system preferences, or default to dark
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    if (prefersLight) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

// Event listener for theme toggle button
themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-theme");
    if (isDark) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
});

function setLightTheme() {
    document.body.classList.remove("dark-theme");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
}

function setDarkTheme() {
    document.body.classList.add("dark-theme");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
}


// ==========================================
// SCROLL INTERACTIONS
// ==========================================
window.addEventListener("scroll", () => {
    const navContainer = document.querySelector(".nav-container");
    if (navContainer) {
        if (window.scrollY > 50) {
            navContainer.style.padding = "0.5rem 1.5rem";
            navContainer.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.12)";
        } else {
            navContainer.style.padding = "0.75rem 2rem";
            navContainer.style.boxShadow = "var(--shadow-soft-md)";
        }
    }
});


// ==========================================
// MOBILE NAVIGATION DRAWER
// ==========================================
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    if (sidemenu) {
        sidemenu.classList.add("open");
    }
}

function closemenu() {
    if (sidemenu) {
        sidemenu.classList.remove("open");
    }
}