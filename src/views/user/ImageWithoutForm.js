import React, { Component } from 'react'

export  class ImageWithoutForm extends Component {

    handleSubmit(e){
        this.props.onImageLoad(e);
    }


  render() {
    return (
      <div>
            <input type="file" onChange={(e)=>this.handleSubmit(e)}/>
      </div>
    )
  }
}