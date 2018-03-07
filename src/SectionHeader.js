import React from 'react'
import cx from 'classnames'
import './SectionHeader.css'

const SectionHeader = props => {
  const { label, title, className } = props
  return (
    <h3 className={cx('SectionHeader', className)}>
      <label>{label}</label>
      {title}
    </h3>
  )
}

export default SectionHeader
