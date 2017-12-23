import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField
} from 'redux-form-material-ui'
import { Field } from 'redux-form'

const styles = {
  style: {
    width: '100%'
  },
  inputStyle: {
    color: '#4D4C59',
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '30px',
    height: '60px'
  },
  floatingLabelStyle: {
    top: '50px'
  },
  floatingLabelFocusStyle: {
    color: '#00bcd4',
    top: '50px'
  },
  underlineStyle: {
    bottom: '-4px'
  },
  underlineFocusStyle: {
    borderColor: '#00bcd4'
  },
  errorStyle: {
    color: '#f44336',
    bottom: '10px'
  }
}

const makeMask = (value) => {
  if (!value) {
    return value
  }

  let onlyNums = value.replace(/[^\d]/g, '').toString()
  if (onlyNums.length > 11) {
    onlyNums = onlyNums.substr(0, 11)
  }

  if (onlyNums.length === 10) {
    return `(${onlyNums.substr(0, 2)}) ${onlyNums.substr(2, 4)}-${onlyNums.substr(6, 4)}`
  } else if (onlyNums.length === 11) {
    return `(${onlyNums.substr(0, 2)}) ${onlyNums.substr(2, 5)}-${onlyNums.substr(7, 4)}`
  }

  return onlyNums
}

const InputPhone = (props) => {
  return (
    <Field component={TextField}
      {...props}
      floatingLabelText={props.label}
      style={styles.style}
      inputStyle={styles.inputStyle}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
      errorStyle={styles.errorStyle}
      normalize={makeMask} />
  )
}

InputPhone.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

InputPhone.propTypes = {

}

export default InputPhone