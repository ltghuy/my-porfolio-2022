import gsap from 'gsap'
import React, { useLayoutEffect } from 'react'

const Cursor = () => {
  useLayoutEffect(() => {
    let mouseX = 0
    let mouseY = 0
    const cursor = document.querySelector('.custom-cursor')
    const cursorScale = document.querySelectorAll('.cursor-scale')

    const getCursorPostion = (e: any) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    cursorScale.forEach((ele) => {
      ;['click', 'mouseleave'].forEach((evt) =>
        ele.addEventListener(
          evt,
          () => {
            cursor?.classList.remove('grow')
            cursor?.classList.remove('grow-small')
          },
          false
        )
      )
      ele.addEventListener('mouseenter', (e: any) => {
        cursor?.classList.add('grow')
        if (ele.classList.contains('cursor-scale-small')) {
          cursor?.classList.remove('grow')
          cursor?.classList.add('grow-small')
        }
      })
    })

    // Animation using GSAP
    gsap.to({}, 0.05, {
      repeat: -1,

      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        })
      },
    })
    window.addEventListener('mousemove', getCursorPostion)
  })

  return (
    <div className="custom-cursor w-10 h-10 fixed top-0 left-0 border-2 border-primary rounded-full z-50 pointer-events-none transition-all origin-center hidden md:block" />
  )
}

export default Cursor
