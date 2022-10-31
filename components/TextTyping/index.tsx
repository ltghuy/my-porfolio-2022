import React, { useEffect } from 'react'
interface TextTypingProps {
  textArray: Array<string>
  addTextTimer: number
  removeTextTimer: number
}

const TextTyping: React.FC<TextTypingProps> = ({
  textArray,
  addTextTimer,
  removeTextTimer,
}) => {
  useEffect(() => {
    const typeText = document.querySelector('.typetext') as HTMLElement
    let index = 0,
      isAdding = true,
      textToBeTypedIndex = 0

    const typingText = () => {
      setTimeout(
        function () {
          // set the text of typeText to a substring of the text to be typed using index.
          typeText.innerText = textArray[textToBeTypedIndex].slice(0, index)
          if (isAdding) {
            // adding text
            if (index > textArray[textToBeTypedIndex].length) {
              // no more text to add
              isAdding = false
              typeText.classList.add('showText')
              //break: wait 1s before playing again
              setTimeout(function () {
                typeText.classList.remove('showText')
                typingText()
              }, 1000)
              return
            } else {
              // increment index by 1
              index++
            }
          } else {
            // removing text
            if (index === 0) {
              // no more text to remove
              isAdding = true
              //switch to next text in text array
              textToBeTypedIndex = (textToBeTypedIndex + 1) % textArray.length
            } else {
              // decrement index by 1
              index--
            }
          }
          // call itself
          typingText()
        },
        isAdding ? addTextTimer : removeTextTimer
      )
    }
    // start animation
    typingText()
  }, [])
  return (
    <h1 className="text-5xl font-bold my-5">
      Hi, I&apos;m &nbsp;
      <span className="text-primary typetext"></span>
      <span className="text-primary inline-block animate-blink">|</span>
    </h1>
  )
}

export default TextTyping
