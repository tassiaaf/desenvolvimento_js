let titulo = document.getElementById('titulo')
let link = document.querySelector('a')
let listaNordenada = document.querySelector('ul')
let listaOrdenada = document.getElementById('lista-ordenada')

titulo.innerText = 'Título'
link.innerText = 'Proz Educação'

listaNordenada.innerHTML = `
<li>Item 01</li>
<li>Item 02</li>
<li>Item 03</li>
`
listaOrdenada.innerHTML = `
<a href = "https://prozeducacao.com.br/cursos/">Cursos</a>
<br>
<a href = "https://prozeducacao.com.br/quem-somos/">Quem Somos</a>
<br>
<a href = "https://prozeducacao.com.br/proz-instituicoes-de-saude/">Proz Saúde</a>
`