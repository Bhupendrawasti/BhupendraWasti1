// scripts/navbar-init.js
function loadNavbar() {
    // Load CSS first
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/CSS/navbar.css';
    document.head.appendChild(cssLink);

    // Then load HTML
    fetch('/navbar.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(html => {
            const placeholder = document.getElementById('navbar-placeholder');
            if (placeholder) {
                placeholder.innerHTML = html;
                initializeBootstrapComponents();
            }
        })
        .catch(error => {
            console.error('Failed to load navbar:', error);
            // Fallback basic navbar
            document.getElementById('navbar-placeholder').innerHTML = `
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="/">Bhupendra</a>
                </nav>
            `;
        });
}

function initializeBootstrapComponents() {
    // Initialize dropdowns
    document.querySelectorAll('[data-toggle="collapse"]').forEach(toggler => {
        toggler.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.dataset.target);
            target.classList.toggle('show');
        });
    });
}

// Load when ready
if (document.readyState !== 'loading') {
    loadNavbar();
} else {
    document.addEventListener('DOMContentLoaded', loadNavbar);
}
