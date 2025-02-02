import { Metadata } from "next";

type PropsProduct = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: PropsProduct): Promise<Metadata> => {
  const productId = (await params).productId;
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Iphone 16 pro max ${productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
    description: `Product ${title} description`,
  };
};

export default async function ProductDetail({ params }: PropsProduct) {
  const productId = (await params).productId;
  return <h2>This is the product {productId}</h2>;
}
