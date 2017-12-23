import React from 'react'
import PropTypes from 'prop-types'
import {
  Checkbox as Check
} from 'redux-form-material-ui'
import { Field } from 'redux-form'

const styles = {
  style: {
    marginTop: '45px'
  },
  labelStyle: {
    color: '#8b8c99',
    fontFamily: 'Poppins',
    fontSize: '12px',
    lineHeight: '18px'
  },
  iconStyle: {
    fill: '#00bcd4'
  }
}

const Checkbox = (props) => {
  return (
    <Field
      {...props}
      style={styles.style}
      iconStyle={styles.iconStyle}
      labelStyle={styles.labelStyle}
      component={Check} />
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

Checkbox.propTypes = {

}

export default Checkbox