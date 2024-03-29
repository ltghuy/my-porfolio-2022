import React, { useLayoutEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import gsap from 'gsap'

const Cursor = () => {
  const router = useRouter()
  const cursorRef = useRef(null)

  useLayoutEffect(() => {
    let cursor = document.querySelector('.custom-cursor') as HTMLElement,
      cursorScale = document.querySelectorAll('.cursor-scale'),
      mouseX = 0,
      mouseY = 0

    function setMousePosition(e: MouseEvent) {
      cursor.classList.add('min-[1440px]:block')
      mouseX = e.clientX
      mouseY = e.clientY
    }

    let ctx = gsap.context(() => {
      gsap.to(cursor, {
        duration: 0.1,
        repeat: -1,
        onRepeat: function () {
          gsap.set(cursor, {
            css: {
              left: mouseX - 15,
              top: mouseY - 15,
            },
          })
        },
      })
    }, cursorRef)

    window.addEventListener('mousemove', (e) => setMousePosition(e))

    cursorScale.forEach((ele) => {
      ele.addEventListener('mouseleave', () => {
        cursor?.classList.remove('grow')
        cursor?.classList.remove('grow-small')
      })
      ele.addEventListener('mouseenter', () => {
        cursor?.classList.add('grow')
        if (ele.classList.contains('cursor-scale-small')) {
          cursor?.classList.remove('grow')
          cursor?.classList.add('grow-small')
        }
      })
    })

    return () => ctx.revert()
  }, [router.asPath])

  useLayoutEffect(() => {
    const resetCursor = () => {
      let cursor = document.querySelector('.custom-cursor') as HTMLElement
      cursor?.classList.remove('min-[1440px]:block')
      cursor?.classList.remove('grow')
      cursor?.classList.remove('grow-small')
    }

    router.events.on('routeChangeComplete', resetCursor)
    return () => {
      router.events.off('routeChangeComplete', resetCursor)
    }
  }, [router.events])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor w-9 h-9 fixed border-2 border-primary rounded-full z-50 pointer-events-none transition-all origin-center hidden"
    />
  )
}

export default Cursor
