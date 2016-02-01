import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.__portalElement = null;
  }

  componentDidMount() {
    let p = this.props.portalId && document.getElementById(this.props.portalId);
    if (!p) {
      p = document.createElement('div');
      p.id = this.props.portalId || null;
      document.body.appendChild(p);
    }
    this.__portalElement = p;
    this.componentDidUpdate();
  }

  componentWillUnmount() {
    document.body.removeChild(this.__portalElement);
  }

  componentDidUpdate() {
    ReactDOM.render(
      <div {...this.props}>{this.props.children}</div>, this.__portalElement
    );
  }

  render() {
    return null;
  }
}

export { Portal as default };
