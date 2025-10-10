function toggleMode() {
  /*document é nossa página inteira representada em formato de objeto js
  .documentElement acessa a tag html que existe dentro do objeto document*/

  const html = document.documentElement

  /*função toggle que verifica, remove ou adiciona a classe light ao elemento html*/

  html.classList.toggle("light")

  /*criando condicional manualmente para caso não existisse a função toggle pronta:

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  // pega a tag html
  // querySelector é uma uma função do documento que pesquisa pelo seletor css
  const imagem = document.querySelector("#profile img")

  //substitui a imagem com a mesma lógina anterior
  if (html.classList.contains("light")) {
    // se tiver no light mode adiciona uma nova imagem
    // a função setAttribute faz alteração em algum tipo de atributo que deve ser passado por parâmetro

    imagem.setAttribute("src", "./assets/avatar-light.png")
    imagem.setAttribute("alt", "Foto de perfil no modo light")
  } else {
    // se não tiver no light mode mantem a imagem inicial
    imagem.setAttribute("src", "./assets/avatar.png")
    imagem.setAttribute("alt", "Foto de perfil no modo dark")
  }
}
