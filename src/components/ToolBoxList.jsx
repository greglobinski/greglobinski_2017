import React from 'react';
import ToolBoxListItem from './ToolBoxListItem';

class ToolBoxList extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      activatedItem: null
    }
  }  
  
  onClickHandler(e, id) {
    this.props.itemOnClick(e, id);
    this.setState(() => ({
      activatedItem: id
    }))
  }

  render() {
    return (
      <ul className="c-toolbox-list">
      {
        this.props.items.map((item) => (
          <ToolBoxListItem 
            id={item.id}
            key={item.id}
            label={item.label}  
            onClick={this.onClickHandler} 
            activated={this.state.activatedItem}   
          />
        ))
      }
      </ul>
    )
  }
};


export default ToolBoxList;

