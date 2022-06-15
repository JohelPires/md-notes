import React from 'react'
import { Form } from 'react-bootstrap'

function Editor({ mdString, setMdString }) {
  function handleChange(e) {
    setMdString(e.target.value)
  }

  return (
    <div>
      <textarea
        id='editor'
        name='editor'
        rows='5'
        value={mdString}
        onChange={(e) => handleChange(e)}
        cols='50'
      ></textarea>
    </div>
  )
}

export default Editor
