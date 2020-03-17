import React, { PureComponent } from "react";

interface Props {
  onlyNumber: any;
}

interface State {
  items: any;
}

export class Test1 extends PureComponent<Props, State> {
  componentDidMount() {
    this.state = {
      items: [1, 2, 3, 4, 5]
    };
  }

  render() {
    return <div>number of items: {this.state.items.length}</div>;
  }
}

export class Test2 extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      onlyNumber: 1
    };
  }

  setANumber = () => {
    this.setState({ onlyNumber: this.state.onlyNumber + 1 });
  };

  setAString = () => {
    this.setState({ onlyNumber: "this is a string" });
  };

  render() {
    const { onlyNumber } = this.state;
    return (
      <div>
        <OnlyNumber onlyNumber={onlyNumber} />
        <button onClick={this.setANumber}>Number</button>;
        <button onClick={this.setAString}>String</button>;
      </div>
    );
  }
}

export class OnlyNumber extends PureComponent<Props, State> {
  render() {
    return <div>number: {this.props.onlyNumber}</div>;
  }
}
