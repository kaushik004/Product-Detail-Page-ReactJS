import React from 'react';
import classes from './App.module.css';
import ProductPreview from './components/ProductPreview'
import ProductDetails from './components/ProductDetails';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>
        
        <div className={classes.ProductData}>
          <ProductDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
