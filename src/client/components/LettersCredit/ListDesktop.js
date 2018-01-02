import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col } from '../Grid/Grid'
import Item from './Item/Item'

const ListDesktop = props => {
  console.log(props.list)
  return (
    <Row>
      {
        props.list.map((item, index) =>
          <Col xs={12} md={12 / (props.list.length < props.count ? props.list.length : props.count)} key={item.id}>
            <Item
              value={item.full_value}
              installment={item.regular_installment_value}
              installmentFlex={item.flex_installment_value}
              deadline={item.duration}
              selected={item.selected}
              onClick={() => null} />
          </Col>
        )
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