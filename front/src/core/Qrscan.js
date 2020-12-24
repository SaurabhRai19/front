import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import {API} from "../backend";
 
class Qrscan extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
    var value= "";
 
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
          
        {console.log(this.state.result)}
        {value=this.state.result}
        <a href={value}>Click here to visit the product </a>
      </div>
    )
  }
}
export default Qrscan;