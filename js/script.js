const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", (event) => {
  const value = formatString(event.target.value);

  const produtos = document.querySelectorAll(".produtos .produto");

  const noResults = document.getElementById("no-results");

  let hasResults = false;

  produtos.forEach((produto) => {
    const produtoTitle = produto.querySelector('.produto h2')
    if (formatString(produtoTitle.textContent).indexOf(value) !== -1) {
      produto.style.display = "flex";
      hasResults = true;
    } else {
      produto.style.display = "none";
    }
  });

  if (hasResults) {
    noResults.style.display = "none";
  } else {
    noResults.style.display = "block";
  }
  console.log(produtos);
});

function formatString(value) {
  return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
