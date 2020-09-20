import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// ActionCreatorをimportする
// import { postEvent } from '../actions'

class EventsNew extends Component {

  render() {
    return(
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

// src/reducers/index.jsのexport default combineReducers({ count })で指定している。
// const mapDispatchToProps = ({ postEvents })

// ★ StateとActionをコンポーネントに関連付けるための重要な記述 ★
export default connect(null, null)(EventsNew);