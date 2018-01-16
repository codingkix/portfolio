import React from 'react'
import './SectionHeader.css'

const SectionHeader = props => {
  const { label, title } = props
  return (
    <h3 className='SectionHeader'>
      <label>{label}</label>
      {title}
    </h3>
  )
}

export default SectionHeader
