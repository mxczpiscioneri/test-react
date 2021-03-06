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
  if (onlyNums.length > 14) {
    onlyNums = onlyNums.substr(0, 14)
  }

  if (onlyNums.length === 11) {
    return `${onlyNums.substr(0, 3)}.${onlyNums.substr(3, 3)}.${onlyNums.substr(6, 3)}-${onlyNums.substr(9, 2)}`
  }

  if (onlyNums.length === 14) {
    return `${onlyNums.substr(0, 2)}.${onlyNums.substr(2, 3)}.${onlyNums.substr(5, 3)}/${onlyNums.substr(8, 4)}-${onlyNums.substr(12, 2)}`
  }

  return onlyNums
}

const InputCpf = (props) => {
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

InputCpf.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

InputCpf.propTypes = {

}

export default InputCpf