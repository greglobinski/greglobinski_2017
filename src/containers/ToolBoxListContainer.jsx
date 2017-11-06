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
          comment: `Often abbreviated as <a href="https://en.wikipedia.org/wiki/JavaScript">JS</a>, it is a high-level, dynamic, weakly typed,
           prototype-based, multi-paradigm, and interpreted programming language. 
          <i>That's the only programing language I use on a daily basis. <b>And I love it!</b></i>`
        },
        { 
          id: 2, 
          label: 'ES2015',
          comment: `It's is a pseudonym for the latest version of the <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015">ECMAScript</a> aka JavaScript.`
        },
        { 
          id: 18, 
          label: 'Babel',
          comment: `A <a href="https://babeljs.io/">transpiler</a> for JavaScript best known for its ability to turn ES2015 into code that runs in browsers which does not support it directly. It lets us to  use next generation JavaScript, today. <i>That's a must have tool.</i>`
        },        
        { 
          id: 3, 
          label: 'HTML5',
          comment: `It's is a pseudonym for the latest version of the JavaScr`          
        },
        { 
          id: 4, 
          label: 'CSS / CSS3',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 5, 
          label: 'BEM',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 6, 
          label: 'Git / Github',
          comment: `It's is a pseudonym for the latest version of the JavaScr` 
        },
        { 
          id: 7, 
          label: 'React',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 8, 
          label: 'Preact',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 9, 
          label: 'Gatsby',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { id: 10, 
          label: 'Angular 2+',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 11, 
          label: 'ArangoDB / AQL',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 12, 
          label: 'npm',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 13, 
          label: 'Webpack',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 14, 
          label: 'jQuery',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 15, 
          label: 'Wordpress',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 16, 
          label: 'Drupal',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
        { 
          id: 17, 
          label: 'PHP',
          comment: `It's is a pseudonym for the latest version of the JavaScr`  
        },
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

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop:  e.target.offsetTop,
      offsetLeft:  e.target.offsetLeft,
      offsetWidth:  e.target.offsetWidth,
      offsetHeight:  e.target.offsetHeight
    }
    /*
      check why the initial shape of the code does'n work in iPhone 4
      it semas as array.find() function is not transpiled corectlyu
      const popOver = this.state.items.find(el => el.id === id);
    */
    const popOver = this.state.items.filter(el => el.id === id)[0];
    this.positionPopOver(anchor, popOver);
  }

  positionPopOver(anchor, popOver) {

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
    const bottomPx = verticalPositionUnder ? `auto` : `${body.offsetHeight - anchor.offsetTop}px`;
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
        comment: popOver.comment
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
