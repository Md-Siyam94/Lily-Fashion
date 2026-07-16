import MainLayout from "@/components/layout/MainLayout";
import Categories from "@/components/ui/home/Categories";
import Facilities from "@/components/ui/home/Facilities";
// import Featured from "@/components/common/ProductShowcase";
import Hero from "@/components/ui/home/Hero";
import ProductShowcase from "@/components/common/ProductShowcase";


export default function Home() {
  return (
    <div>
      <MainLayout>
         <Hero></Hero>
    <Categories></Categories>
    <Facilities></Facilities>
    <ProductShowcase title={"Featured Products"}></ProductShowcase>
      </MainLayout>
    </div>
  );
}
