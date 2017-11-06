import React from 'react';
import ToolBoxList from '../components/ToolBoxList';
import ToolBoxPopOver from '../components/ToolBoxPopOver';
import FaUser from 'react-icons/lib/fa/user';


class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.state = {
      items: [
        { 
          id: 1, 
          label: 'JavaScript',
            comment: `Often abbreviated as <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JS</a>, 
            it is a high-level, dynamic, weakly typed,
            prototype-based, multi-paradigm, and interpreted programming language. 
            <span>That's the only programing language I use on a daily basis. 
            <b>And I love it!</b></span>`
        },
        { 
          id: 2, 
          label: 'ES2015',
          comment: `It's is a pseudonym for the latest version of the 
            <a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" target="_blank">
            ECMAScript</a> aka JavaScript.<span>ES6 makes my coding easier.</span>`
        },
        { 
          id: 18, 
          label: 'Babel',
          comment: `A <a href="https://babeljs.io/" target="_blank">transpiler</a> for JavaScript 
            best known for its ability to turn ES2015 into code that runs in browsers 
            which does not support it directly. It lets us to  use next generation 
            JavaScript, today. <span>That's a <b>must-have</b> tool.</span>`
        },        
        { 
          id: 3, 
          label: 'HTML5',
          comment: `A markup language used for structuring and presenting content on the 
            World Wide Web. It is the fifth and current major version of the 
            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a> standard.
            <span>There is no web without HTML.</span>`          
        },
        { 
          id: 4, 
          label: 'CSS / CSS3',
          comment: `Cascading Style Sheets - a style sheet 
            <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">language</a> 
            used for describing the presentation of a document written in HTML. 
            <span>CSS make web beautifull.</span>`  
        },
        { 
          id: 5, 
          label: 'BEM',
          comment: `BEM (Block, Element, Modifier) is a component-based 
            <a href="https://en.bem.info/" target="_blank">approach</a> to web development. `  
        },
        { 
          id: 6, 
          label: 'Git',
          comment: `Git is a <a href="https://en.wikipedia.org/wiki/Git" target="_blank">version control</a> system for tracking changes 
            in computer files and coordinating work on those files among multiple people.
            <span>It saved my life, a couple of times ;)</span>` 
        },
        { 
          id: 19, 
          label: 'Github',
          comment: `A web-based Git version control repository hosting service.
            <span>That's my <a href="/" target="_blank">Github</a></span>` 
        },        
        { 
          id: 7, 
          label: 'React',
          comment: `A JavaScript <a href="https://reactjs.org/" target="_blank">library</a> for building user interfaces. 
            React makes it painless to create interactive UIs. Build encapsulated components 
            that manage their own state and then compose them to make complex UIs.
            <span>I used it once and fell in love.</span>`  
        },
        /*{ 
          id: 8, 
          label: 'Preact',
          comment: `comment`  
        },*/
        { 
          id: 9, 
          label: 'Gatsby',
          comment: `A static PWA (Progressive Web App) 
          <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
            you build blazing-fast sites with your data, whatever the source. 
            <span>This website is build with Gatsby.</span>`  
        },
        { id: 10, 
          label: 'Angular 2+',
          comment: `A TypeScript-based open-source front-end web application 
            <a href="https://angular.io/" target="_blank">platform</a>.`  
        },
        { 
          id: 11, 
          label: 'ArangoDB / AQL',
          comment: `A multi-model mostly-memory <a href="https://www.arangodb.com/" target="_blank">database</a>
            with a flexible data model for documents and graphs. It is designed as 
            a “general purpose database”, offering all the features you typically need for modern web applications.`  
        },
        { 
          id: 12, 
          label: 'npm',
          comment: `A package <a href="https://www.npmjs.com/" target="_blank">manager</a> for 
            the JavaScript programming language.`  
        },
        { 
          id: 13, 
          label: 'Webpack',
          comment: `An open-source JavaScript module <a href="https://webpack.js.org/" target="_blank">bundler</a>.
            Webpack takes modules with dependencies and generates static assets representing those modules.`  
        },
        { 
          id: 14, 
          label: 'jQuery',
          comment: `A cross-platform JavaScript <a href="https://jquery.com/" target="_blank">library</a> designed to simplify 
            the client-side scripting of HTML.
            <span>I used it much and often ... in the past.</span>`  
        },
        { 
          id: 15, 
          label: 'Wordpress',
          comment: `The largest self-hosted <a href="https://wordpress.org/" target="_blank">blogging tool</a>
            in the world, used on millions of sites.
            <span>I've build some websites using it. Like this 
            <a href="http://polishlanguage.dlachetnych.pl/" target="_blank">one</a> or 
            <a href="http://lab.gregloby.com/" target="_blank">that</a>.</span>`  
        },
        { 
          id: 16, 
          label: 'Drupal',
          comment: `An open source content-management framework written in PHP.
            <span>I build exactly one <a href="http://babelvillage.com/" target="_blank">site</a> with Drupal 7.</span>`  
        },
        { 
          id: 17, 
          label: 'PHP',
          comment: `A server-side scripting <a href="http://php.net/" target="_blank">language</a> designed primarily 
            for web development but also used as a general-purpose programming language.
            <span>Recently, my only contact with PHP is with theming WP.</span>`  
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
