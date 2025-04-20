"use client";

import React from "react";
import { useParams } from "next/navigation";
import "./ProductInSection.css";

// fallback colors array (rotate if no bgColor from API)
const bgColors = ["#c9850a", "#535611","#832a30", "#820c0c", "#cc6600", "#007b5e"];

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
    { label: "Weight", value: product.weight },
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
      <div className="product-banner">
        <img src={product.product_image} alt={product.product_name} />
      </div>

      <div className="product-content">
        <h1>
          <div style={{ color: bgColor }}>{product.product_name}</div>
        </h1>
        <p>
          <strong>Ingredients:</strong> {product.ingredients}
        </p>

        <table className="nutrition-table">
          <thead>
            <tr>
              <th style={{ backgroundColor: bgColor, color: "#fff" }}>
                Nutritional Information per 200ml
              </th>
              <th style={{ backgroundColor: bgColor, color: "#fff" }}>Per 200ml</th>
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
