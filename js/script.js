//Botão Mobile
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//avaliacoes
function reviews() {
  let reviews = [
    {
      perfil: "./img/terceiroPerfil.JPG",
      nome: "Ana Maria",
      text: '"O melhor pão de mel que já comi na vida! A massa é incrivelmente fofinha e úmida, e o recheio de doce de leite é na medida certa, sem ser enjoativo."',
    },
    {
      perfil: "./img/perfil.png",
      nome: "Ana Luísa",
      text: '"Que delícia! A casquinha é super crocante, e a trufa do recheio é cremosa e saborosa. Não fica aquele cone mole ou murcho, o que é um grande diferencial."',
    },
    {
      perfil: "./img/perfil.png",
      nome: "Ana Júlia",
      text: '"A melhor alternativa para quem ama chocolate! A trufa é macia e consistente, e o cone não estava quebrado. A entrega foi rápida e o produto veio perfeito."',
    },
    {
      perfil: "./img/segundoPerfil.png",
      nome: "Ana Carolina",
      text: '"Sabor de infância e aconchego. O aroma de especiarias é marcante, e a cobertura de chocolate tem uma espessura perfeita."',
    },
    {
      perfil: "./img/perfil.png",
      nome: "Ana Carla",
      text: '"Doce na medida certa! Não é excessivamente açucarado. O recheio de beijinho é leve e o chocolate da casquinha complementa perfeitamente. Quero provar todos os sabores!"',
    },
  ];

  // let avaliacaoPerfil = document.querySelector(".avaliacao-perfil"); // Descomente no HTML se for usar
  let avalicaoNome = document.querySelector(".avalicao-nome");
  let avalicaoText = document.querySelector(".avalicao-text");
  let contentAvaliacoes = document.querySelector(".content-avaliacoes"); // Seleciona o container principal

  let currentIndex = 0;
  let animationDuration = 800; // Duração da animação em milissegundos (0.8s)
  let intervalTime = 8000; // Tempo entre as trocas automáticas (8 segundos)
  let autoSlideInterval; // Variável para armazenar o ID do intervalo

  function showReview(index) {
    let currentReview = reviews[index];

    // if (avaliacaoPerfil) avaliacaoPerfil.src = currentReview.perfil;
    avalicaoNome.innerText = currentReview.nome;
    avalicaoText.innerText = currentReview.text;
  }

  function animateAndShow(newIndex) {
    // adiciona a classe 'fade-out' para iniciar a animação de saída
    contentAvaliacoes.classList.add("fade-out");
    contentAvaliacoes.classList.remove("fade-in"); // garante que fade-in não esteja ativo

    // 2. Espera a duração da animação de saída
    setTimeout(() => {
      currentIndex = newIndex;
      showReview(currentIndex); // Atualiza o conteúdo DOM

      // 3. Remove 'fade-out' e adiciona 'fade-in' para a animação de entrada
      contentAvaliacoes.classList.remove("fade-out");
      contentAvaliacoes.classList.add("fade-in");
    }, animationDuration); // Espera a duração da animação
  }

  function nextReview() {
    let newIndex = (currentIndex + 1) % reviews.length;
    animateAndShow(newIndex);
  }

  // Inicia o slider e a animação inicial
  window.onload = function () {
    showReview(currentIndex);
    contentAvaliacoes.classList.add("fade-in"); // Mostra o primeiro review com animação
    startAutoSlide();
  };

  // Funções para controlar o auto-slide
  function startAutoSlide() {
    clearInterval(autoSlideInterval); // Limpa qualquer intervalo anterior para evitar duplicação
    autoSlideInterval = setInterval(nextReview, intervalTime);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Opcional: Pausar/Reiniciar o auto-slide ao passar o mouse
  contentAvaliacoes.addEventListener("mouseenter", stopAutoSlide);
  contentAvaliacoes.addEventListener("mouseleave", startAutoSlide);
}

reviews();
