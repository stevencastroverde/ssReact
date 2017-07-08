import React, { Component } from 'react';
import './Season.css';

import Episode from '../Episode/Episode';

const styles = {
    expanded: {
        display:'inherit'
    },
    collapsed: {
        display: 'none'
    },
    expandedColor:{
        background: 'rgb(178, 178, 178)',
        transition: 'background .4s ease-in'
    },
    collapsedColor: {
        background: '#fefefe'
    }
};

class Season extends Component {
    constructor(props){
        super(props);
        this.state= {
            isExpanded: false
        };
    }

    handleSelect = e => {
        e.preventDefault();
        this.setState({ isExpanded: !this.state.isExpanded});
    };

    render(){
        const stateStyle = this.state.isExpanded ? styles.expanded : styles.collapsed;
        const colorStyle = this.state.isExpanded ? styles.expandedColor : styles.collapsedColor;
      return (
          <section>
            <div className="season-heading" onClick={this.handleSelect}>
                <div className="season-number" style={colorStyle}>
                     <a href="#">Season {this.props.season}</a>
                </div>
            </div>
            <div className="season-episodes" style={stateStyle}>

               {this.props.episodes.map((episode, i) => {return <Episode key={i} {...episode} /> })}
            </div>
          </section>
      )
    }
}

export default Season