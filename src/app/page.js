import Header from "@/components/header/Header";
import ProductWrapper from "@/components/product-wrapper/ProductWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href={"/wishlist"}>Wishlist</Link>
      <Header />
      <ProductWrapper />
    </div>
  );
}
