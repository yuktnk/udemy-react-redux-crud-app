import React, { Component }from 'react';
// connect関数のimport
// 今まで作成したStateやActionと、コンポーネントとの関連付けを行って、
// ViewのEventで状態を遷移させて、遷移後の状態を画面に再描画する。
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FlootingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// ActionCreatorをimportする
import { readEvents } from '../actions'
import { fixed } from 'global-prefix';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event =>(
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style ={
      position: "fixed",
      right: 16,
      bottom: 16
    }
    return(
      <React.Fragment>
        <FlootingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FlootingActionButton>
        
        <Table>
          <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Iitle</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>

        
      </React.Fragment>
    )
  }
}

// src/reducers/index.jsのexport default combineReducers({ count })で指定している。
const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

// ★ StateとActionをコンポーネントに関連付けるための重要な記述 ★
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);


