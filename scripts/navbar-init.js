// Load navbar and initialize
function loadNavbar() {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(html => {
            const placeholder = document.getElementById('navbar-placeholder');
            placeholder.innerHTML = html;
            
            // Initialize Bootstrap components manually
            const toggler = placeholder.querySelector('[data-toggle="collapse"]');
            if (toggler) {
                toggler.addEventListener('click', function() {
                    const target = document.querySelector(this.dataset.target);
                    target.classList.toggle('show');
                });
            }
        });
                                            }
