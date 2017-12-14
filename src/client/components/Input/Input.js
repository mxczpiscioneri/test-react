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
  }
}

const Input = (props) => {
  return (
    <Field component={TextField}
      name={props.name}
      floatingLabelText={props.label}
      {...props}
      style={styles.style}
      inputStyle={styles.inputStyle}
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle} />
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

Input.propTypes = {

}

export default Input