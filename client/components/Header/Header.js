import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routePaths from '../../constants/routes'
import { Link } from 'react-router'
import { Container } from '../Grid/Grid'
import styles from './header.css'
import logoImg from './logo.svg'

const Header = props => {
  return (
    <header className={styles.header}>
      <Container gutter={true}>
        <div className={styles.content}>
          <Link to="https://www.santander.com.br">
            <img
              src={logoImg}
              alt='Santander'
            />
          </Link>
        </div>
      </Container>
    </header>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)