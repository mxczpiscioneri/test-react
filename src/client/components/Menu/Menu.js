import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routePaths from '../../constants/routes'
import { Link } from 'react-router'
import classNames from 'classnames'
import { Sticky } from 'react-sticky'
import BurgerMenu from 'react-burger-menu'
import { Container } from '../Grid/Grid'
import ProgressLinear from '../ProgressLoading/ProgressLinear'
import SimulateFast from '../SimulateFast/SimulateFast'
import styles from './menu.css'
import logoWM from './logo-wm-transparent.png'
import logoSantander from './logo-santander.svg'
import lineLogo from './line-logo.png'
import menuImg from './menu.svg'
import { redirect } from '../../actions/resultActions'

class Menu extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  goResult = (e) => {
    e.preventDefault()
    this.props.redirect('/resultado/parcela/1200')
  }

  render() {
    const isMenuOpen = function (state) {
      return state.isOpen;
    }

    const MenuMobile = BurgerMenu['slide']

    return (
      <div>
        <MenuMobile
          onStateChange={isMenuOpen}
          customBurgerIcon={<img src={menuImg} />}
          customCrossIcon={<img src={menuImg} />}>
          <img src={logoWM} alt='webmotors' />
          <Link to={routePaths.root.path}>{routePaths.root.title}</Link>
          <Link to={routePaths.about.path}>{routePaths.about.title}</Link>
          <Link to={routePaths.why.path}>{routePaths.why.title}</Link>
          <Link to={routePaths.faq.path}>{routePaths.faq.title}</Link>
          <button onClick={this.goResult}>SIMULAR CONSÓRCIO</button>
        </MenuMobile>
        <Sticky topOffset={130}>
          {({
          isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
        }) => {
            const menuClass = classNames(
              styles.menu,
              {
                [styles.transparent]: this.props.transparent,
                [styles.dark]: !this.props.transparent,
                [styles.fixed]: isSticky
              }
            )
            return (
              <nav className={menuClass}>
                <ProgressLinear />

                <Container>
                  <div className={styles.content}>
                    <Link to={routePaths.root.path}>
                      <img src={logoWM} alt='webmotors' className={styles.logo} />
                      <img src={lineLogo} className={styles.lineLogo} />
                      <span className={styles.title}>Consórcio.</span>
                    </Link>
                    <div className={styles.navagation}>
                      <Link className={styles.itemMenu} to={routePaths.about.path}>{routePaths.about.title}</Link>
                      <Link className={styles.itemMenu} to={routePaths.why.path}>{routePaths.why.title}</Link>
                      <Link className={styles.itemMenu} to={routePaths.faq.path}>{routePaths.faq.title}</Link>
                      <Link className={styles.logoSantander} to='https://www.santander.com.br' target={'new'}><img src={logoSantander} alt='Santander' /></Link>
                    </div>
                  </div>
                </Container>

                {
                  !this.props.notSticky && isSticky &&
                  <SimulateFast />
                }
              </nav>
            )
          }}
        </Sticky>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ redirect }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Menu)