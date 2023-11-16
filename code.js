document.getElementById('open').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal-content').style.display = 'block';
});

document.getElementById('checkage').addEventListener('click', function () {
    var age = document.getElementById('ageinput').value;
    if (age > 18) {
        
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else {
        document.getElementById('modal-content').style.display = 'none';
        document.getElementById('red-page').style.display = 'block';
    }
});