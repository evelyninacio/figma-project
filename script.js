// ======================================================
//  MODO LIGHT/DARK COM PERSISTÊNCIA ENTRE PÁGINAS
// ======================================================

// Recupera o tema salvo (caso exista)
const savedTheme = localStorage.getItem("theme")

// Se existir um tema salvo (light), aplica no <html>
if (savedTheme === "light") {
  document.documentElement.classList.add("light")
}

// ======================================================
//  FUNÇÃO QUE ALTERA O TEMA
// ======================================================

function toggleMode() {
  // html = elemento raiz do documento
  const html = document.documentElement

  // Alterna (adiciona/remove) a classe "light"
  html.classList.toggle("light")

  // ------------------------------------------------------
  //  PERSISTÊNCIA DO TEMA
  // ------------------------------------------------------
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }

  // ======================================================
  //  TROCA DE IMAGEM DO PERFIL (APENAS SE EXISTIR)
  // ======================================================

  // Aqui impedimos erro caso a página sobre.html não tenha #profile
  const imagem = document.querySelector("#profile img")

  if (imagem) {
    if (html.classList.contains("light")) {
      imagem.setAttribute("src", "./assets/avatar-light.png")
      imagem.setAttribute("alt", "Foto de perfil no modo light")
    } else {
      imagem.setAttribute("src", "./assets/avatar.png")
      imagem.setAttribute("alt", "Foto de perfil no modo dark")
    }
  }
}
