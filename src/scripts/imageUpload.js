// code modified from Brian Emil Hartz http://codepen.io/hartzis/pen/VvNGZP
import React from 'react';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<img src="./images/avatar.png" />);
    }

    return (
      <input className="fileInput btn btn-primary avatar" type="file" onChange={(e)=>this._handleImageChange(e)} />
    )
  }
}

export default ImageUpload;
