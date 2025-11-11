document.addEventListener("DOMContentLoaded", function() {
  // --- Validação do formulário ---
  const form = document.querySelector('.form-contato');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }

      if (!emailValido.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
      }

      alert('Mensagem enviada com sucesso! 🎉');
      form.reset();
    });
  }

  // --- Animação de entrada dos cards ---
  const cards = document.querySelectorAll('.servico');
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach((card) => observer.observe(card));
});
