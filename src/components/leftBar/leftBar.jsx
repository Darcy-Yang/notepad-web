import React, { Component } from 'react';

import './leftBar.less';

const tags = [
  { name: 'Work', color: 'blue' },
  { name: 'Personal', color: 'orange' },
  { name: 'Daily Journal', color: 'yellow' },
]

class LeftBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navs : [
        { name: 'My Notes', icon: 'notepad', selected: true },
        { name: 'Starred', icon: 'star', selected: false },
        { name: 'Shared', icon: 'share', selected: false },
        { name: 'Archived', icon: 'folder', selected: false },
        { name: 'Deleted', icon: 'trash', selected: false },
      ],
    }
  }

  chooseNav = (index) => {
    const navs = this.state.navs;
    navs.forEach((nav) => nav.selected = false);
    navs[index].selected = true;
    this.setState({
      navs,
    });
    this.props.navClicked(navs[index].name);
  }

  render() {
    return (
      <div className="left-bar">
        <div className="nav-area">
          {
            this.state.navs.map((nav, index) => (
              <div
                className={nav.selected ? 'nav active' : 'nav'}
                key={index}
                onClick={this.chooseNav.bind(this, index)}>
                <i className={`iconfont icon-${nav.icon}`}></i>
                <span>{nav.name}</span>
              </div>
            ))
          }
        </div>
        <div className="tag-area">
          <h3>TAGS</h3>
          {
            tags.map((tag, index) => (
              <div className="tag" key={index}>
                <div className={`point ${tag.color}`}></div>
                <span>{tag.name}</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default LeftBar;
