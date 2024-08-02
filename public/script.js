document.addEventListener('DOMContentLoaded', function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        });
});
document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector('.animate-text');
    const textContent = text.textContent;
    text.textContent = '';

    let index = 0;
    function type() {
        if (index < textContent.length) {
            text.textContent += textContent[index];
            index++;
            setTimeout(type, 100); // Adjust speed here (milliseconds)
        }
    }

    type();
});
