// scripts/navbar-init.js
function loadNavbar() {
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
            // Fallback navbar if needed
        });
}

function initializeBootstrapComponents() {
    // Manually handle dropdown toggle for fetched content
    document.querySelectorAll('[data-toggle="collapse"]').forEach(toggler => {
        toggler.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.dataset.target);
            target.classList.toggle('show');
        });
    });
}

// Load when DOM is ready
if (document.readyState !== 'loading') {
    loadNavbar();
} else {
    document.addEventListener('DOMContentLoaded', loadNavbar);
}
