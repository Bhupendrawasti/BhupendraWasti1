// Create the footer element
const footer = document.createElement('footer');
footer.className = 'footer-basic bg-dark text-white mt-5';

// Create the container div
const container = document.createElement('div');
container.className = 'container py-4';

// Create social links div
const socialLinks = document.createElement('div');
socialLinks.className = 'social-links mb-3';

// Create social media links
const socialMedia = [
  { href: 'https://facebook.com/bhupendrawasti.official', icon: 'facebook' },
  { href: 'https://www.tiktok.com/@bhupendrawasti', icon: 'music' },
  { href: 'https://twitter.com/yourusername', icon: 'twitter' }
];

socialMedia.forEach(media => {
  const link = document.createElement('a');
  link.href = media.href;
  link.target = '_blank';
  link.rel = 'noopener';
  
  const icon = document.createElement('i');
  icon.className = `fa fa-${media.icon} fa-2x`;
  
  link.appendChild(icon);
  socialLinks.appendChild(link);
});

// Create copyright paragraph
const copyright = document.createElement('p');
copyright.className = 'mb-0';
copyright.innerHTML = '&copy; 2022 Bhupendra Wasti.<br> All rights reserved.';

// Build the structure
container.appendChild(socialLinks);
container.appendChild(copyright);
footer.appendChild(container);

// Add CSS styles
const style = document.createElement('style');
style.textContent = `
.footer-basic {
    padding: 20px 0;
    background-color: black;
    color: white;
    text-align: center;
}

.footer-basic ul {
    padding: 0;
    list-style: none;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 0;
}

.footer-basic .list-inline {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.footer-basic li {
    padding: 0 10px;
}

.footer-basic ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.footer-basic ul a:hover {
    opacity: 1;
}

.footer-basic .social {
    text-align: center;
    padding-bottom: 10px;
}

.footer-basic .social > a {
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #ccc;
    margin: 0 8px;
    color: inherit;
    opacity: 0.75;
    transition: opacity 0.3s ease;
}

.footer-basic .social > a:hover {
    opacity: 1;
}

.footer-basic .copyright {
    margin-top: 10px;
    font-size: 16px;
    color: #aaa;
}

/* Additional spacing for social links */
.social-links a {
    margin: 0 10px;
}
`;

// Add everything to the document
document.head.appendChild(style);
document.body.appendChild(footer);

// Make sure Font Awesome is loaded (if not already)
const faCheck = setInterval(() => {
  if (typeof window.FontAwesome === 'undefined') {
    const faScript = document.createElement('script');
    faScript.src = 'https://kit.fontawesome.com/a076d05399.js';
    faScript.crossOrigin = 'anonymous';
    document.head.appendChild(faScript);
    clearInterval(faCheck);
  }
}, 100);
