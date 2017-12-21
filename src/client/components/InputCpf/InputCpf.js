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
    color: '#F3123C',
    top: '50px'
  },
  underlineStyle: {
    bottom: '-4px'
  },
  underlineFocusStyle: {
    borderColor: '#F3123C'
  },
  errorStyle: {
    color: '#F3123C',
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
 
  if (onlyNums.length === 11) {
    return `${onlyNums.substr(0, 3)}.${onlyNums.substr(3, 3)}.${onlyNums.substr(6, 3)}-${onlyNums.substr(9, 2)}`
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