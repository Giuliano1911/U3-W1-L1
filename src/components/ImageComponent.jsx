import { Component } from 'react'

class ImageComponent extends Component {
  render() {
    const { url, alt } = this.props
    return <img src={url} alt={alt} />
  }
}

export default ImageComponent
