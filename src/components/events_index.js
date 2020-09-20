import React, { Component }from 'react';
// connect関数のimport
// 今まで作成したStateやActionと、コンポーネントとの関連付けを行って、
// ViewのEventで状態を遷移させて、遷移後の状態を画面に再描画する。
import { connect } from 'react-redux';
import _ from 'lodash';

// ActionCreatorをimportする
import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event =>(
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Iitle</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    )
  }
}

// src/reducers/index.jsのexport default combineReducers({ count })で指定している。
const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

// ★ StateとActionをコンポーネントに関連付けるための重要な記述 ★
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);


