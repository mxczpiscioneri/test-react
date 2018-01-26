import React from 'react'
import PropTypes from 'prop-types'
import {
  TextField
} from 'redux-form-material-ui'
import { Hidden } from '../Grid/Grid'
import { Field } from 'redux-form'

const styles = {
  style: {
    width: '100%'
  },
  inputStyle: {
    width: '100%',
    borderRadius: '2px',
    backgroundColor: '#FFFFFF',
    color: '#4D4C59',
    fontFamily: 'Poppins',
    fontSize: '18px',
    border: 'none',
    boxSizing: 'border-box',
    padding: '30px 15px 10px 15px',
    marginTop: '4px',
    height: '65px'
  },
  floatingLabelStyle: {
    top: '50px'
  },
  floatingLabelFocusStyle: {
    color: '#00bcd4',
    top: '50px'
  },
  underlineStyle: {
    display: 'none'
  },
  underlineFocusStyle: {
    borderColor: '#00bcd4'
  },
  errorStyle: {
    color: '#f44336',
    position: 'absolute',
    bottom: '4px',
    left: '15px'
  }
}

const stylesXs = {
  inputStyle: {
    width: '100%',
    borderRadius: '2px',
    backgroundColor: '#FFFFFF',
    color: '#4D4C59',
    fontFamily: 'Poppins',
    fontSize: '18px',
    border: 'none',
    boxSizing: 'border-box',
    padding: '0px 15px 10px 15px',
    marginTop: '4px',
    height: '100px',
    paddingLeft: '0px'
  },
  underlineStyle: {
  },
}

const makeMask = (value) => {
  if (!value) {
    return value
  }

  let onlyNums = parseInt(value.replace(/[^\d]/g, ''))
  if (onlyNums.toString().length > 8) {
    onlyNums = onlyNums.toString().substr(0, 8)
  }

  if (onlyNums > 0) {
    onlyNums = leftPad(onlyNums, 3, '0')
    let tempNums = '';
    let length = onlyNums.length - 3;
    let char = ','

    for (var i = onlyNums.length - 1; i >= 0; i--) {
      if (i === length) {
        tempNums = char + tempNums
        length -= 3
        char = '.'
      }

      tempNums = onlyNums[i] + tempNums;
    }

    onlyNums = tempNums
  } else {
    onlyNums = '0,00'
  }

  return `R$ ${onlyNums}`
}

const leftPad = (value, length, replacement) => {
  let result = (value || '').toString()

  while (result.length < length) {
    result = replacement + result;
  }

  return result;
}

const InputDecimal = (props) => {
  return (
    <div>
      <Hidden xs>
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
      </Hidden>
      <Hidden sm md lg xl>
        <Field component={TextField}
          {...props}
          floatingLabelText={props.label}
          style={styles.style}
          inputStyle={stylesXs.inputStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineStyle={stylesXs.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
          errorStyle={styles.errorStyle}
          normalize={makeMask} />
      </Hidden>
    </div>
  )
}

InputDecimal.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

InputDecimal.propTypes = {

}

export default InputDecimal