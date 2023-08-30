import React from 'react'

export default function page({state}) {
  return (
    <div className = {`menu ${state ? 'menuActive' : ''}`}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
