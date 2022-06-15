import React from 'react'
import { Form } from 'react-bootstrap'

function Editor({ mdString, setMdString }) {
  function handleChange(e) {
    setMdString(e.target.value)
  }

  return (
    <div>
      <h3 className='container-title'>Texto em Markdown</h3>
      <div className='container'>
        <textarea
          className='textarea'
          id='editor'
          name='editor'
          rows='20'
          value={mdString}
          onChange={(e) => handleChange(e)}
          // cols='50'
        ></textarea>
      </div>
    </div>
  )
}

export default Editor
