
document.querySelector('.buttonOne').addEventListener('click', function () {
    document.querySelector('.capsule').classList.add('visible');
});

document.querySelector('.background').addEventListener('click', function () {
    document.querySelector('.capsule').classList.remove('visible');
});