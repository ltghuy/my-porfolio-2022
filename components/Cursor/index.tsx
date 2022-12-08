import React, { useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'

const Cursor = () => {
  const router = useRouter()

  useLayoutEffect(() => {
    let mouseX = 0
    let mouseY = 0
    const cursor = document.querySelector('.custom-cursor')
    const cursorScale = document.querySelectorAll('.cursor-scale')

    const getCursorPostion = (e: any) => {
      cursor?.classList.add('scale-100')
      mouseX = e.clientX
      mouseY = e.clientY

      cursorScale.forEach((ele) => {
        ele.addEventListener('mouseleave', (e: any) => {
          cursor?.classList.remove('grow')
          cursor?.classList.remove('grow-small')
        })
        ele.addEventListener('mouseenter', (e: any) => {
          cursor?.classList.add('grow')
          if (ele.classList.contains('cursor-scale-small')) {
            cursor?.classList.remove('grow')
            cursor?.classList.add('grow-small')
          }
        })
      })

      // Animation using GSAP
      gsap.to({}, 0.075, {
        repeat: -1,

        onRepeat: function () {
          gsap.set(cursor, {
            css: {
              left: mouseX - 10,
              top: mouseY - 10,
            },
          })
        },
      })
    }

    window.addEventListener('mousemove', getCursorPostion)
    return () => {
      window.removeEventListener('mousemove', getCursorPostion)
    }
  })

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor')
    cursor?.classList.remove('grow')
    cursor?.classList.remove('grow-small')
  }, [router.asPath])

  return (
    <div className="custom-cursor w-10 h-10 fixed border-2 border-primary rounded-full scale-0 z-50 pointer-events-none transition-all origin-center hidden md:block" />
  )
}

export default Cursor
