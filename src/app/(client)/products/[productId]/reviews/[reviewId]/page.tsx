import { notFound } from "next/navigation";

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  const count = getRandomInt(2);
  if (count === 1) throw new Error("Something went wrong with the review");

  if (parseInt(reviewId) > 100) notFound();

  return (
    <div>
      Product {productId} Review {reviewId}
    </div>
  );
}
