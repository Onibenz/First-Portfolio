document.querySelector('.fa-bars')
        .addEventListener('click', dropDown);

function dropDown() {
    document.querySelector('body').classList.add('mobileview-overlay');
    document.querySelector('.mobile-view').style.display = 'block';
}

document.querySelector('.fa-xmark')
        .addEventListener('click', closeNav);

function closeNav() {
    document.querySelector('body').classList.remove('mobileview-overlay');
    document.querySelector('.mobile-view').style.display = 'none';
}