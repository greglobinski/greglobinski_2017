import React from 'react';
import ToolBoxList from '../components/ToolBoxList';
import ToolBoxPopOver from '../components/ToolBoxPopOver';


class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.state = {
      items: [
        { 
          id: 1, 
          label: 'JavaScript',
          comment: 'JavaScript (JS) is a lightweight, interpreted, programming language with first-class functions.'
        },
        { 
          id: 2, 
          label: 'ES2015 + Babel',
          comment: `It's is a pseudonym for the latest version of the JavaScript. Babel is a transpiler for JavaScript best known for its ability to turn ES6 (the next version of JavaScript) into code that runs in your browser`
        },
        { 
          id: 3, 
          label: 'HTML5' 
        },
        { 
          id: 4, 
          label: 'CSS / CSS3' 
        },
        { 
          id: 5, 
          label: 'BEM' 
        },
        { id: 6, label: 'Git / Github' },
        { id: 7, label: 'React' },
        { id: 8, label: 'Preact' },
        { id: 9, label: 'Gatsby' },
        { id: 10, label: 'Angular 2+' },
        { id: 11, label: 'ArangoDB / AQL' },
        { id: 12, label: 'npm' },
        { id: 13, label: 'Webpack' },
        { id: 14, label: 'jQuery' },
        { id: 15, label: 'Wordpress' },
        { id: 16, label: 'Drupal' },
        { id: 17, label: 'PHP' },
      ],
      popOver: {
        topPx: 'auto',
        bottomPX: 'auto',
        leftPx: 'auto',
        rightPx: 'auto',
        comment: ''
      }
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  itemListOnClickHandler(e) {
    const anchor = {
      offsetTop:  e.target.offsetTop,
      offsetLeft:  e.target.offsetLeft,
      offsetWidth:  e.target.offsetWidth,
      offsetHeight:  e.target.offsetHeight
    }
    this.positionPopOver(anchor);
  }

  positionPopOver(anchor) {

    const popWidth = 200;
    const popHeight = 100;
    const body = document.querySelector('body');
    

    const spaceUnder = body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight = body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = (spaceUnder >= anchor.offsetTop) ? true : false;
    const horizontalPositionOnRight = (spaceOnRight >= anchor.offsetLeft) ? true : false;

    const verticalPosition = verticalPositionUnder ? anchor.offsetTop : anchor.offsetTop - popHeight + anchor.offsetHeight;
    const horizontalPosition = horizontalPositionOnRight ? anchor.offsetLeft : anchor.offsetLeft - popWidth + anchor.offsetWidth;

    const topPx = verticalPositionUnder ? `${anchor.offsetTop + anchor.offsetHeight}px` : `auto`;
    const bottomPx = verticalPositionUnder ? `auto` : `${body.offsetHeight - anchor.offsetTop - anchor.offsetHeight}px`;
    const leftPx = horizontalPositionOnRight ? `${anchor.offsetLeft}px` : `auto`;
    const rightPx = horizontalPositionOnRight ? `auto` : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;
    const positionUnderModifierClass = '';

    this.setState(() => ({
      popOver: {
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        comment: `It's is a pseudonym for the <a href="/">latest version</a> of the JJavaScript best known for its ability to turn ES6 (the next version of JavaScript) into code that runs in your browserIt's is a pseudonym for the latest version of the JavaScript. Babel is a transpiler for JavaScript best known for its ability to turn ES6 (the next version of JavaScript) into`
      }
    }));
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items} 
          itemOnClick={this.itemListOnClickHandler} 
        />
        <ToolBoxPopOver 
          top={this.state.popOver.topPx}
          bottom={this.state.popOver.bottomPx}
          left={this.state.popOver.leftPx}
          right={this.state.popOver.rightPx}
          modifierClasses={this.state.popOver.modifierClasses}
          comment={this.state.popOver.comment}
        />
      </div>
    );
  }
}

export default ToolBoxListContainer;
