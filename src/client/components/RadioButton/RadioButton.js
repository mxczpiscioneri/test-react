import React from 'react'
import PropTypes from 'prop-types'
import {
  RadioButton as Radio
} from 'redux-form-material-ui'
import './radioButton.css'
import { Field } from 'redux-form';

const style = {
  labelStyle: {
    color: '#8b8c99',
    fontFamily: 'Poppins',
    fontSize: '12px',
    lineHeight: '18px'
  },
  iconStyle: {
    fill: '#F3123C',
    color: '#F3123C',
    backgroundColor: '#F3123C'
  }
}

const RadioButton = (props) => {
  return (
    <Field
      component={Radio}
      {...props}
      labelStyle={style.labelStyle}
      iconStyle={style.iconStyle}
      style={labelStyle} />
  )
}

RadioButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

RadioButton.propTypes = {

}

export default RadioButton