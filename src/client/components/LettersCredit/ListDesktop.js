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
        props.list.map((item, index) =>
          !item.hide && (
            <Col xs={12} md={12 / (props.list.length < props.count ? props.list.length : props.count)} key={item.id}>
              <Item
                value={item.full_value}
                installment={item.regular_installment_safe_value}
                installmentFlex={item.flex_installment_safe_value}
                deadline={item.duration}
                selected={item.selected}
                clickMobile={false}
                onClick={() => props.onClick(item.id)} />
            </Col>
          )
        )
      }
    </Row>
  )
}

ListDesktop.propTypes = {
  list: PropTypes.array.isRequired,
  count: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListDesktop)