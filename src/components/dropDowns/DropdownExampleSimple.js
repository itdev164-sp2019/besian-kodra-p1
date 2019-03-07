import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropdown from '@bit/semantic-org.semantic-ui-react.dropdown'
import Menu from '@bit/semantic-org.semantic-ui-react.menu'
import { connect } from 'react-redux'

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css'/>

class DropdownExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options:[
        { key: 1, text: 'Dark', value: 1 },
        { key: 2, text: 'Amber', value: 2 },
        { key: 3, text: 'Light', value: 3 }],
      pic1: 0,
      pic2: 0,
      whichSelector: "",
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // if (this.props.whichSelector !== prevProps.whichSelector) {
    //   this.setState({
    //     whichSelector: this.props.whichSelector
    //   });
    // }
    console.log(this.state.whichSelector);
  }

handleChange = (e, { value, ...props }) => {
  if(props.whichSelector === "BeerType"){
    this.myMethod1(value);
  }else if(props.whichSelector === "GlassType"){
    this.myMethod2(value);
  }else{
    this.myMethod3(value);
  }
  this.setState ( {
    whichSelector: props.whichSelector,
});
  
console.log(`updated to ${this.state.whichSelector}`);
};

myMethod1 = (up1 = 0) =>{
  if(up1 > 0){
  this.props.handleClick(up1-1);
  console.log(`${this.props.whichSelector}= ${up1}`);
  }
};

myMethod2 = (up1 = 0) =>{
  if(up1 > 0){
  this.props.handleClick(up1-1);
  console.log(`${this.props.whichSelector}= ${up1}`);
  }
};

myMethod3 = (up1 = 0) =>{
  if(up1 > 0){
  this.props.handleClick(up1-1, up1-1);
  console.log(`${this.props.whichSelector}= ${up1}`);
  }
};

render() {
    return (
  <Menu compact={true}>
    {style}<Dropdown clearable whichSelector={this.props.whichSelector} options = {this.props.options} selection={true} onChange={this.handleChange} active={true}/>
  </Menu>
    );
  }
}

DropdownExampleSimple.protoTypes = {
  text: PropTypes.string,
  options: PropTypes.array
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    myMethod1: () => ({type:'MYMETHOD1', value:this.state.pic1}),
    myMethod2: () => ({type:'MYMETHOD2', value:this.state.pic2})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DropdownExampleSimple);