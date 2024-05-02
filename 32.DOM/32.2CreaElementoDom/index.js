const h2Tag = document.createElement("h2")

h2Tag.textContent = "ESTE ES EL SUBTITULO"
h2Tag.style.height = "500px"
h2Tag.style.width = "600px"
h2Tag.style.color = "white"
h2Tag.style.background = "gray"
h2Tag.style.fontSize = "30px"
h2Tag.style.padding = "20px"
h2Tag.style.margin = "50px 0"
h2Tag.style.display = "flex"
h2Tag.style.justifyContent = "center"
h2Tag.style.alignItems = "center"

const preSelector = document.querySelector("#subtitulo")
preSelector.appendChild(h2Tag)
