import React from 'react'
import routePaths from '../../constants/routes'
import { Link } from 'react-router'
import classNames from 'classnames'
import { Container } from '../Grid/Grid'
import styles from './menu.css'
import logoImg from './logo.svg'

const Menu = props => {
  const menuClass = classNames(
    {
      [styles.transparent]: props.transparent,
      [styles.dark]: !props.transparent
    }
  )

  return (
    <nav className={menuClass}>
      <Container gutter={true}>
        <div className={styles.content}>
          <Link to={routePaths.root.path}>
            <img
              src={logoImg}
              alt='Santander'
            />
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
}

export default Menu