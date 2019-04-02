import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ''};
    // this.names = this.props.namesArray.filter(name => name.name.startsWith(this.state.inputVal));
    this.changeInput = this.changeInput.bind(this);
    this.chooseName = this.chooseName.bind(this);
  }

  changeInput(e) {
    e.preventDefault();
    this.setState({ inputVal: e.target.value });
  }

  chooseName(e) {
    e.preventDefault();
    this.setState({ inputVal: e.target.innerHTML });
  }

  render() {
    return (
      <div className="autocomplete">
        <input type="text" onChange={this.changeInput} value={this.state.inputVal}/>
        <ul>
          {this.props.namesArray
            .filter(name => name.name.toLowerCase().startsWith(this.state.inputVal.toLowerCase()))
            .map((name, idx) => <li onClick={this.chooseName} key={idx}>{name.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default AutoComplete;