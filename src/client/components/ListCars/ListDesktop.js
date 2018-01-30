import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col } from '../Grid/Grid'
import Item from './Item/Item'

const getValue = (precos) => {
  let value = 0

  if (precos.ValorFipe > 0) {
    value = precos.ValorFipe
  } else if (precos.ValorMedio > 0) {
    value = precos.ValorMedio
  } else if (precos.ValorMenor > 0) {
    value = precos.ValorMenor
  } else if (precos.ValorMaior > 0) {
    value = precos.ValorMaior
  } 

  return value
}

const ListDesktop = props => {
  return (
    <Row>
      {
        props.list.map((item, index) => (
          item &&
            <Col xs={6} md={3} key={index}>
              <Item
                key={index}
                brand={item.Marca.nome}
                name={item.Modelo.nome}
                value={getValue(item.DadosPreco)}
                image={item.Fotos[0].caminho} />
            </Col>
        ))
      }
    </Row>
  )
}

ListDesktop.propTypes = {
  list: PropTypes.array.isRequired,
  count: PropTypes.number,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListDesktop)