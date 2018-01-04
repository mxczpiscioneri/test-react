import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick'
import { Row, Col } from '../Grid/Grid'
import Item from './Item/Item'

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
        props.list.map((item, index) =>
          <Item
            key={item.id}
            value={item.full_value}
            installment={item.regular_installment_value}
            installmentFlex={item.flex_installment_value}
            deadline={item.duration}
            selected={item.selected}
            onClick={() => props.onClick(item.id)} />
        )
      }
    </Slider>
  )
}

ListMobile.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListMobile)