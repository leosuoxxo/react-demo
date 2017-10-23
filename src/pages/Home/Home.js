import React, {
  Component
} from 'react';

import './home.scss';
import './test.sass';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  _handleClick() {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    return (
      <div>
        this is home~<br/>
        現在數量：{this.state.count}<br/>
        <button onClick={() => this._handleClick()}>增加</button>
            </div>
    )
  }
}