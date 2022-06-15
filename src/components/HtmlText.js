import React from 'react'
import Markdown from 'marked-react'

function HtmlText({ mdString }) {
  return (
    <div>
      <h3 className='container-title'>HTML Preview</h3>
      <div id='preview' className='container'>
        <Markdown
          value={mdString}
          gfm={true}
          breaks={true}
          openLinksInNewTab={true}
        />
      </div>
    </div>
  )
}

export default HtmlText
