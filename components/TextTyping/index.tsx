import React, { useEffect } from 'react'

const TextTyping = () => {
  const texts = ['Huy Le', 'Front End Developer']
  const speed = 110
  const pause = 800 // <--- the longer delay between text direction changes

  useEffect(() => {
    const typeWriter = (i = 0, index = 1, direction = 1) => {
      let displayed = texts[i].slice(0, index)
      const typingText = document.querySelector('#typing-text') as HTMLElement
      typingText.textContent = displayed

      if (displayed.length >= texts[i].length) {
        // start removing after pause
        setTimeout(() => typeWriter(i, index - 1, -1), pause)
      } else if (displayed.length === 0) {
        // go to next text after pause
        setTimeout(() => typeWriter((i + 1) % texts.length), pause)
      } else {
        // continue in the current direction
        setTimeout(() => typeWriter(i, index + direction, direction), speed)
      }
    }

    typeWriter()
  }, [])

  return (
    <h1 className="text-5xl font-bold my-5">
      Hi, I am &nbsp;
      <span className="text-primary" id="typing-text"></span>
      <span
        className="text-primary inline-block animate-blink"
        id="typing-cursor"
      >
        |
      </span>
    </h1>
  )
}

export default TextTyping
