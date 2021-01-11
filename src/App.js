import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './components/product_preview/ProductPreview'
import ProductDetails from './components/product_details/ProductDetails';
import TopBar from './components/topbar/TopBar';
import ProductData from './utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos});
  }

  // If current value is changed than update state
  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.currentPreviewImagePos === this.state.currentPreviewImagePos) {
      return false
    }

    return true
  }

  render() {
    return (
        <div className="App">
            <TopBar />

            <div className={classes.MainContainer}>
                <div className={classes.ProductPreview}>
                    <ProductPreview
                        currentPreviewImage={
                            this.state.productData.colorOptions[
                                this.state.currentPreviewImagePos
                            ].imageUrl
                        }
                        currentSelectedFeature={this.state.currentSelectedFeature}
                    />
                </div>

                <div className={classes.ProductData}>
                    <ProductDetails
                        data={this.state.productData}
                        onColorOptionClick={this.onColorOptionClick}
                        currentPreviewImagePos={this.state.currentPreviewImagePos}
                        onFeatureItemClick={this.onFeatureItemClick}
                        currentSelectedFeature={this.state.currentSelectedFeature}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
