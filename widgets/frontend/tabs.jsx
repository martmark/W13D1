import React from 'react';

class Tabs extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      selectedIndex: 0
    }
    this.selectIndex = this.selectIndex.bind(this);
  }

  selectIndex(event) {
    
    let old = document.getElementsByClassName('selected');

    if (old.length > 0) {
      old[0].classList.toggle('selected');
    };
    let selectedIndex = event.target.getAttribute('idx');
    event.target.classList.toggle('selected');
    this.setState({ selectedIndex });

  }

  render() {
    return (
      <div className="tabs">
        <ul>
          {
            this.props.tabsArray.map((el, idx) => 
            <h1 key={idx} idx={idx} onClick={this.selectIndex}>{el.title}</h1>)
          }
        </ul>
        <article>
          {this.props.tabsArray[this.state.selectedIndex].content}
        </article>
      </div>
    )
  }
}



export default Tabs;