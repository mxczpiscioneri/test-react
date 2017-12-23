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
            key={index}
            name={item.name}
            value={item.value}
            image={item.image} />
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