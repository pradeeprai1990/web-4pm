import Image from "next/image";
import HomeBanner from "../components/home-components/HomeBanner";
import Collection from "../components/home-components/Collection";

export const metadata = {
 
};

export default function Home() {

  metadata.title="Home - E-commerce App"
  metadata.description="Welcome to our E-commerce App! Explore a wide range of products, from electronics to fashion, all in one place. Enjoy seamless shopping with secure payments and fast delivery. Start your shopping journey today!"
 
  return (
    <div>
      <HomeBanner/>
      <Collection/>
    </div>
  );
}
