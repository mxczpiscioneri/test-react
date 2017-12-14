import React from 'react'
import routePaths from '../../constants/routes'
import { Link } from 'react-router'
import classNames from 'classnames'
import { Sticky } from 'react-sticky'
import { Container } from '../Grid/Grid'
import styles from './menu.css'
import logoImg from './logo-wm-white.svg'

const Menu = props => {


  return (
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
            [styles.transparent]: props.transparent,
            [styles.dark]: !props.transparent,
            [styles.fixed]: isSticky
          }
        )
        return (
          <nav className={menuClass}>
            <Container>
              <div className={styles.content}>
                <Link to={routePaths.root.path}>
                  <img src={logoImg} alt='Santander' className={styles.logo} />
                </Link>
                <div className={styles.navagation}>
                  <Link to={routePaths.about.path}>{routePaths.about.title}</Link>
                  <Link to={routePaths.why.path}>{routePaths.why.title}</Link>
                  <Link to={routePaths.faq.path}>{routePaths.faq.title}</Link>
                </div>
              </div>
            </Container>
          </nav>
        )
      }}
    </Sticky>
  )
}

export default Menu