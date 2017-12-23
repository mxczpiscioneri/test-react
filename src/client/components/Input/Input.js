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

const Input = (props) => {
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
      errorStyle={styles.errorStyle} />
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

Input.propTypes = {

}

export default Input