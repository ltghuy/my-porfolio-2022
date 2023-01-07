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

    cursor.style.display = 'none'

    function setMousePosition(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.display = 'block'
    }

    let ctx = gsap.context(() => {
      gsap.to(cursor, {
        duration: 0.1,
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
      className="custom-cursor w-10 h-10 fixed border-2 border-primary rounded-full z-50 pointer-events-none transition-all origin-center hidden md:block"
    />
  )
}

export default Cursor
