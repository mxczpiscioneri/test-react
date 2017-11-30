import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routePaths from '../../constants/routes'
import { Link } from 'react-router'
import { Container } from '../Grid/Grid'
import Info from './Info/Info';
import Navigation from './Navigation/Navigation';
import Copy from './Copy/Copy';
import styles from './footer.css'
import logoImg from './logo.svg'
import logoBankImg from './logo-bank.svg'

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <Info />
      <Navigation />
      <Copy />
    </footer >
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Footer)