import React from 'react'
import Markdown from 'marked-react'

function HtmlText({ mdString }) {
  return (
    <div id='preview'>
      <Markdown>{mdString}</Markdown>
    </div>
  )
}

export default HtmlText
