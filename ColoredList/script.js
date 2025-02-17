document.getElementById('listeCouleur').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const couleurAleatoire = '#' + Math.floor(Math.random()*16777215).toString(16);
        event.target.style.color = couleurAleatoire;
    }
});
