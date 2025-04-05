
// Content Protection Script for Blogger
document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
    
    // Disable image dragging
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('draggable', 'false');
    }
    
    // Optional: Show custom message
    document.addEventListener('contextmenu', function(e) {
        alert('Content protection: Right-click is disabled on this site');
    });
});
