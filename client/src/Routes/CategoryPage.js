import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const params = useParams();

  return <div> List all items for category: {params.categorySlug}</div>;
}
