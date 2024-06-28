function toggleMenu() {
    var menuBtn = document.querySelector('.menu-btn');
    var menuList = document.getElementById('menu-list');

    // Basculer la classe menu-open sur le bouton
    menuBtn.classList.toggle('menu-open');

    // Basculer la classe menu-open sur la liste de menu
    menuList.classList.toggle('menu-open');

    // Afficher ou masquer la liste de menu en fonction de l'état du bouton
    if (menuBtn.classList.contains('menu-open')) {
        // Si la classe menu-open est présente, afficher la liste de menu
        menuList.querySelectorAll('a').forEach(function(item) {
            item.style.display = 'wrap';
            document.querySelector('#menu-list.menu').style.display = 'block';
        });
    } else {
        // Sinon, cacher la liste de menu
        menuList.querySelectorAll('a').forEach(function(item) {
            document.querySelector('#menu-list.menu').style.display = 'none';
        });
    }
}


// Afficher le bouton de menu sur les appareils mobiles
function adjustMenuDisplay() {
    var menuBtn = document.querySelector('.menu-btn');
    var menuList = document.querySelector('menu');

    if (window.innerWidth <= 600) {
        menuBtn.style.display = 'flex';
        menuList.style.display = menuBtn.classList.contains('menu-open') ? 'block' : 'none';
    } else {
        menuBtn.style.display = 'none';
        menuList.style.display = 'flex';
    }
}

// Mettre à jour l'affichage du menu lorsque la taille de la fenêtre change
window.addEventListener('resize', adjustMenuDisplay);

// Appeler la fonction pour ajuster l'affichage du menu lors du chargement de la page
window.addEventListener('DOMContentLoaded', adjustMenuDisplay);
