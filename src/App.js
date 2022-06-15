import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Footer from './components/Footer'
import Header from './components/Header'
import HtmlText from './components/HtmlText'

function App() {
  const [mdString, setMdString] = useState('# Digite seu texto em Markdown...')

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
