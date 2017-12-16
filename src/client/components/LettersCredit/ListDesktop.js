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
          <Col xs={12} md={12 / props.count} key={index}>
            <Item
              value={item.value}
              installment={item.installment}
              installmentFlex={item.installmentFlex}
              deadline={item.deadline}
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