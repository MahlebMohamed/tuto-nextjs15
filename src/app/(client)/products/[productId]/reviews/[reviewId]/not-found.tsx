"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  const productId = path.split("/")[2];
  const reviewId = path.split("/")[4];

  return (
    <div>
      <h1>404 - Page non trouvée</h1>
      <p>
        Reviews {reviewId} for Product {productId}
      </p>
    </div>
  );
}
