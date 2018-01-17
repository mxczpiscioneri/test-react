import React from 'react'
import PropTypes from 'prop-types'
import {
  RadioButtonGroup as Group
} from 'redux-form-material-ui'
import { Field } from 'redux-form'

const styles = {
  style: {
    display: 'flex',
    marginTop: '10px'
  }
}

const RadioButtonGroup = (props) => {
  return (
    <Field component={Group}
      style={styles.style}
      labelStyle={{ color: 'red' }}
      {...props}>
      {props.children}
    </Field>
  )
}

RadioButtonGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

RadioButtonGroup.propTypes = {

}

export default RadioButtonGroup