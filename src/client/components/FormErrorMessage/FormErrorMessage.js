import React from 'react'
import PropTypes from 'prop-types'
import styles from ''

const customStyle = {
  color: 'red'
}

const FormErrorMessage = ({ error, submitting }) => (
  !!error && !submitting ? (
    <div
      style={customStyle}
    >
      {error}
    </div>
  ) : null
)

FormErrorMessage.propTypes = {
  error: PropTypes.string,
  submitting: PropTypes.bool
}

export default FormErrorMessage