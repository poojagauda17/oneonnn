import React from "react";
import "./ProductsSection.css";
import Link from "next/link";

export default function ProductGrid({ productList = [] }) {
  if (!productList.length) return null;
  return (
    <section className="products-container">
      <div className="product-grid">
        {productList.map((product, index) => (
          <Link key={index} href={`/products/${index}`}>
            <div key={index} className="product-image-card">
              <img
                src={product.product_image || product.imageUrl}
                alt={`Product ${index + 1}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
