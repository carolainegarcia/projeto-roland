var btn = document.querySelector('#btn-show');
var produtosOcultos = document.querySelector('.hidden');

btn.addEventListener('click', function () {
    if (produtosOcultos.style.display === 'flex') {
        produtosOcultos.style.display = 'none';
        btn.innerHTML = "Ver todos";
    } else {
        produtosOcultos.style.display = 'flex';
        btn.innerHTML = "Ver menos";
    }
}
);