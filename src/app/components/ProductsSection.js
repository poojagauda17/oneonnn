import React from "react";
import "./ProductsSection.css";
import Link from "next/link";

const productImages = [
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
  "/images/MangoJuice.jpg",
];

export default function ProductGrid() {
  return (
    <section className="products-container">
      <div className="product-grid">
        {productImages.map((src, index) => (
          <Link key={index} href={`/products/${index}`}>
            <div key={index} className="product-image-card">
              <img src={src} alt={`Product ${index + 1}`} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
