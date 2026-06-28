import './style.css'

const targetUrl = 'https://geminiwatermarkremover.io/'

document.querySelector('#root').innerHTML = `
  <iframe
    class="mirror-frame"
    title="Gemini Watermark Remover"
    src="${targetUrl}"
    referrerpolicy="no-referrer"
    allow="fullscreen"
  ></iframe>
`