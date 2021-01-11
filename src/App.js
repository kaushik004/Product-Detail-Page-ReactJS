import React, { Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './components/product_preview/ProductPreview'
import ProductDetails from './components/product_details/ProductDetails';
import TopBar from './components/topbar/TopBar';
import ProductData from './utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection: false
  }

  render() {
    return (
        <div className="App">
            <TopBar />

            <div className={classes.MainContainer}>
                <div className={classes.ProductPreview}>
                    <ProductPreview
                        currentPreviewImage={this.state.currentPreviewImage}
                        showHeartBeatSection={this.state.showHeartBeatSection}
                    />
                </div>

                <div className={classes.ProductData}>
                    <ProductDetails data={this.state.productData} />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
