import React, { useEffect } from 'react'
import './cursor.scss'

const Cursor = () => {
  useEffect(() => {
    const root = document.querySelector('html')

    // Real cursor element
    const cursor = document.createElement('div')
    cursor.classList.add('cursor')
    root.appendChild(cursor)

    // Following extra cursor element
    const follower = document.createElement('div')
    follower.classList.add('cursor', 'cursor__follower')
    root.appendChild(follower)

    const setPosition = (element, e) => {
      element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    };

    const handleMouseMove = (e) => {
      setPosition(follower, e)
      setPosition(cursor, e)
    };

    root.addEventListener('mousemove', handleMouseMove)

    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      root.removeChild(cursor);
      root.removeChild(follower);
    };
  }, [])

  return null
};

export default Cursor