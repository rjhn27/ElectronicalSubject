window.onload = function() {
    const h1 = document.querySelector('.animate-left');
    const ul = document.querySelector('.animate-right');
  
    h1.classList.add('show');
    ul.classList.add('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 1.0
    });

    const asideContainer = document.querySelector('.aside-container-2');
    observer.observe(asideContainer);
});