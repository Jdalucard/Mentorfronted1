import React from "react";
import imagen from "../assets/image-product-desktop.jpg";
import imagen2 from "../assets/image-product-mobile.jpg";
import "./styles.css";

const CardProduct = () => {
  return (
    <>
      <main>
        <div className="product">
          <picture className="product__img">
            <source srcSet={imagen2} media="(max-width: 640px)" />
            <img src={imagen} alt="imagen" />
          </picture>
          <div className="product__content">
            <p className="product__category"> Perfume</p>
            <h1 className="product__title">Gabrielle esssmce eau De Parfum</h1>
            <p>
              A floral, solar and voluptuos Interpretation composed by oliver
              Polge, perfumer-creator for the house CHANEL.
            </p>
            <div className="flex-Group">
              <p className="product_price">$ 149.99</p>
              <p className="product_original_price">
                <s>$ 169.99</s>
              </p>
            </div>

            <button className="button" data-icon="shopping-card" type="submit">
              Add to Card
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CardProduct;
