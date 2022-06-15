import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Footer from './components/Footer'
import Header from './components/Header'
import HtmlText from './components/HtmlText'

function App() {
  const [mdString, setMdString] = useState(
    '# Markdown Notes\n## Digite suas anotações em markdown.\n\nCom o markdown você não se preocupa com a formatação. Para obter, por exemplo, um texto em negrito, você digita `**texto em negrito**` e obtém **texto em negrito**.\nPara uma lista, você digita, por exemplo\n```\n- Um item da lista\n- Outro item\n- Ainda outro item.\n```\ne obtém:\n- Um item da lista\n- Outro item\n- Ainda outro item.\n\n Segundo a Wikipedia o Markdown é\n > a lightweight markup language for creating formatted text using a plain-text editor. John Gruber and Aaron Swartz created Markdown in 2004 as a markup language that is appealing to human readers in its source code form\n\n![Logo do Markdown](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)\n\nPara saber mais sobre a notação markdown visite:\n - [Sintaxe básica de escrita e formatação no GitHub](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)\n - [Markdown Guide](https://www.markdownguide.org/getting-started/)'
  )

  return (
    <div>
      <Header />
      <Editor mdString={mdString} setMdString={setMdString} />
      <HtmlText mdString={mdString} />
      <Footer />
    </div>
  )
}

export default App
