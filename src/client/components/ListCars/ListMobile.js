import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
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

const ListMobile = props => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: false,
    arrows: false,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500
  }

  return (
    <Slider {...settings}>
      {
        props.list.map((item, index) => {
          item &&
            <Item
              key={index}
              brand={item.Marca.nome}
              name={item.Modelo.nome}
              value={getValue(item.DadosPreco)}
              image={item.Fotos[0].caminho} />
        }
        )
      }
    </Slider>
  )
}

ListMobile.propTypes = {
  list: PropTypes.array.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListMobile)