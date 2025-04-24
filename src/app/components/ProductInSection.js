"use client";

import React from "react";
import { useParams } from "next/navigation";
import "./ProductInSection.css";

// fallback colors array (rotate if no bgColor from API)
const bgColors = ["#fe792c", "#fe9102","#ff9203", "#6f6820", "#c5da01", "#007b5e"];

export default function ProductInSection({ productList = [] }) {
  const params = useParams();
  const id = parseInt(params?.id || "0");
  const product = productList[id] || productList[0];
  console.log("✅ Products:", product);

  if (!product) return <p>Product not found.</p>;

  const bgColor = product.bgColor || bgColors[id % bgColors.length];

  const nutritionData = [
    { label: "Acidity as Citric Acid", value: product.acidity_as_citric_acid },
    { label: "Caffeine", value: product.caffeine },
    { label: "Calcium", value: product.calcium },
    { label: "Carbohydrates", value: product.carbohydrates },
    { label: "Citric Acid", value: product.citric_acid },
    { label: "Energy", value: product.energy },
    { label: "Fat", value: product.fat },
    { label: "Protein", value: product.protein },
    { label: "Sugar", value: product.sugar },
    { label: "Sodium", value: product.sodium },
    { label: "Vitamin B6", value: product.vitamin_b6 },
    { label: "Vitamin B12", value: product.vitamin_b12 },
    { label: "Vitamin D", value: product.vitamin_d },
    { label: "Trans Fat", value: product.trans_fat },
    { label: "Total Fat", value: product.total_fat },
    { label: "Inositol", value: product.inositol },
    { label: "Taurine", value: product.taurine },
    { label: "Niacin", value: product.niacin },
  ];

  return (
    <div className="product-details">
      <div className="product-banner product-image-det ">
        <img src={product.product_image} alt={product.product_name} />
        <div className="product-img-details">
          <h4>Details</h4>
          <p>{product.details}</p>
        </div>
      </div>

      <div className="product-content product-table">
        <h1>
          <div style={{ color: bgColor }} >{product.product_name}</div>
        </h1>
        <p>
          <strong>Ingredients:</strong> {product.ingredients}
        </p>

        <table className="nutrition-table">
          <thead>
            <tr>
              <th style={{ backgroundColor: bgColor, color: "#fff" }}>
                Nutritional Information
              </th>
              <th style={{ backgroundColor: bgColor, color: "#fff" }}>{product.weight}</th>
            </tr>
          </thead>
          <tbody>
            {nutritionData.map(
              (item, idx) =>
                item.value && (
                  <tr key={idx}>
                    <td>{item.label}</td>
                    <td>{item.value}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
