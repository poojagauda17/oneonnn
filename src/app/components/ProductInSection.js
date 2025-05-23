"use client";

import React from "react";
import { useParams } from "next/navigation";
import "./ProductInSection.css";

const productData = [
  {
    name: "Kokum Juice",
    image: "/images/kokum.jpg",
    bgColor: "#820c0c",
    ingredients:
      "Purified Water, Sugar, Natural Kokum, Permitted Class || Preservative",
    nutrition: [
      { label: "Total Solids", value: "16.5%" },
      { label: "Acidity as Citric Acid", value: "1.2%" },
      { label: "Sugars as Sucrose", value: "12.8%" },
      { label: "Energy", value: "52.0" },
      { label: "Carbohydrates", value: "11.0%" },
      { label: "Protein", value: "0.5%" },
      { label: "Fat", value: "0.5%" },
    ],
  },
  {
    name: "Jeera Juice",
    image: "/images/kokum.jpg",
    bgColor: "#820c0c",
    ingredients:
      "Purified Water, Sugar, Natural Kokum, Permitted Class || Preservative",
    nutrition: [
      { label: "Total Solids", value: "16.5%" },
      { label: "Acidity as Citric Acid", value: "1.2%" },
      { label: "Sugars as Sucrose", value: "12.8%" },
      { label: "Energy", value: "52.0" },
      { label: "Carbohydrates", value: "11.0%" },
      { label: "Protein", value: "0.5%" },
      { label: "Fat", value: "0.5%" },
    ],
  },
  {
    name: "Buttermilk Juice",
    image: "/images/kokum.jpg",
    bgColor: "#820c0c",
    ingredients:
      "Purified Water, Sugar, Natural Kokum, Permitted Class || Preservative",
    nutrition: [
      { label: "Total Solids", value: "16.5%" },
      { label: "Acidity as Citric Acid", value: "1.2%" },
      { label: "Sugars as Sucrose", value: "12.8%" },
      { label: "Energy", value: "52.0" },
      { label: "Carbohydrates", value: "11.0%" },
      { label: "Protein", value: "0.5%" },
      { label: "Fat", value: "0.5%" },
    ],
  },
  {
    name: "Mango Juice",
    image: "/images/kokum.jpg",
    bgColor: "#820c0c",
    ingredients:
      "Purified Water, Sugar, Natural Kokum, Permitted Class || Preservative",
    nutrition: [
      { label: "Total Solids", value: "16.5%" },
      { label: "Acidity as Citric Acid", value: "1.2%" },
      { label: "Sugars as Sucrose", value: "12.8%" },
      { label: "Energy", value: "52.0" },
      { label: "Carbohydrates", value: "11.0%" },
      { label: "Protein", value: "0.5%" },
      { label: "Fat", value: "0.5%" },
    ],
  },
  {
    name: "apple Juice",
    image: "/images/kokum.jpg",
    bgColor: "#820c0c",
    ingredients:
      "Purified Water, Sugar, Natural Kokum, Permitted Class || Preservative",
    nutrition: [
      { label: "Total Solids", value: "16.5%" },
      { label: "Acidity as Citric Acid", value: "1.2%" },
      { label: "Sugars as Sucrose", value: "12.8%" },
      { label: "Energy", value: "52.0" },
      { label: "Carbohydrates", value: "11.0%" },
      { label: "Protein", value: "0.5%" },
      { label: "Fat", value: "0.5%" },
    ],
  },
  {
    name: "Bananana Juice",
    image: "/images/kokum.jpg",
    bgColor: "#820c0c",
    ingredients:
      "Purified Water, Sugar, Natural Kokum, Permitted Class || Preservative",
    nutrition: [
      { label: "Total Solids", value: "16.5%" },
      { label: "Acidity as Citric Acid", value: "1.2%" },
      { label: "Sugars as Sucrose", value: "12.8%" },
      { label: "Energy", value: "52.0" },
      { label: "Carbohydrates", value: "11.0%" },
      { label: "Protein", value: "0.5%" },
      { label: "Fat", value: "0.5%" },
    ],
  },
  {
    name: "Lichi Juice",
    image: "/images/kokum.jpg",
    bgColor: "#820c0c",
    ingredients:
      "Purified Water, Sugar, Natural Kokum, Permitted Class || Preservative",
    nutrition: [
      { label: "Total Solids", value: "16.5%" },
      { label: "Acidity as Citric Acid", value: "1.2%" },
      { label: "Sugars as Sucrose", value: "12.8%" },
      { label: "Energy", value: "52.0" },
      { label: "Carbohydrates", value: "11.0%" },
      { label: "Protein", value: "0.5%" },
      { label: "Fat", value: "0.5%" },
    ],
  },
  // Add more product objects as needed
];

export default function ProductDetails() {
  const params = useParams();
  const id = parseInt(params?.id || "0"); // get id from URL
  const product = productData[id] || productData[0];

  return (
    <div className="product-details">
      <div
        className="product-banner"
        style={{ backgroundColor: product.bgColor }}
      >
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <h1>
          <div style={{ color: product.bgColor }}>{product.name}</div>
        </h1>
        <p>
          <strong>Ingredients:</strong> {product.ingredients}
        </p>

        <table className="nutrition-table">
          <thead style={{ backgroundColor: product.bgColor }}>
            <tr>
              <th>Nutritional Information per 200ml (*Approximate Value*)</th>
              <th>Per 200ml</th>
            </tr>
          </thead>
          <tbody>
            {product.nutrition.map((item, idx) => (
              <tr key={idx}>
                <td>{item.label}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
