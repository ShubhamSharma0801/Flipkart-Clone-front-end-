document.addEventListener("DOMContentLoaded", () => {
    // Search functionality
    const searchBox = document.querySelector('.search-box');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', () => {
        alert(`You searched for: ${searchBox.value}`);
    });

    // Login modal functionality
    const loginBtn = document.querySelector('.login button');
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.innerHTML = `
        <div class="modal">
            <h2>Login</h2>
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <button class="close-btn">Close</button>
        </div>
    `;
    document.body.appendChild(modalOverlay);

    loginBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'block';
    });

    // Close modal
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Adding Hover effects
    const section4Items = document.querySelectorAll('.section-4-item');

    section4Items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            item.querySelector('img').style.transform = 'translateX(20px)';
        });

        item.addEventListener('mouseleave', function() {
            item.querySelector('img').style.transform = 'translateX(0)';
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const section4List = document.querySelector('.section-4-list');
    const section4Items = Array.from(document.querySelectorAll('.section-4-item'));
    
    // Creating a wrapper for the items to handle continuous scrolling
    const section4ListWrapper = document.createElement('div');
    section4ListWrapper.classList.add('section-4-list-wrapper');

    section4Items.forEach(item => {
        section4ListWrapper.appendChild(item.cloneNode(true));
    });
    section4Items.forEach(item => {
        section4ListWrapper.appendChild(item.cloneNode(true));
    });
    
    // Clearing the original list and appending the new wrapper
    section4List.innerHTML = '';
    section4List.appendChild(section4ListWrapper);
});
document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.getElementById('footerText');
    const text = footerText.innerText;
    footerText.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.animationDelay = `${index * 0.1}s`;
        footerText.appendChild(span);
    });
});

