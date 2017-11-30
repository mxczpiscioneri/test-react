import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Info from './Info/Info';
import Navigation from './Navigation/Navigation';
import Copy from './Copy/Copy';
import styles from './footer.css'

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