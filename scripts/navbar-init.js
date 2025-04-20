// scripts/navbar-init.js
function loadNavbar() {
    // Load CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '/Css/navbar.css';
    document.head.appendChild(cssLink);

    // Load navbar HTML
    fetch('/navbar.html')
        .then(response => response.text())
        .then(html => {
            const placeholder = document.getElementById('navbar-placeholder');
            placeholder.innerHTML = html;
            
            // Initialize Bootstrap components manually
            initNavbarToggle();
        })
        .catch(error => {
            console.error('Navbar load error:', error);
            loadFallbackNavbar();
        });
}

function initNavbarToggle() {
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
            
            // Update aria-expanded attribute
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
}

function loadFallbackNavbar() {
    document.getElementById('navbar-placeholder').innerHTML = `
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="/">Bhupendra Wasti</a>
            <button class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/index">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
    initNavbarToggle();
}

// Initialize
if (document.readyState === 'complete') {
    loadNavbar();
} else {
    window.addEventListener('load', loadNavbar);
}
