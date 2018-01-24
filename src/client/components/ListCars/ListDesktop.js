import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col } from '../Grid/Grid'
import Item from './Item/Item'

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
                value={item.DadosPreco.ValorFipe}
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