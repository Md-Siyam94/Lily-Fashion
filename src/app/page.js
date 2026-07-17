import MainLayout from "@/components/layout/MainLayout";
import Categories from "@/components/ui/home/Categories";
import Facilities from "@/components/ui/home/Facilities";
// import Featured from "@/components/common/ProductShowcase";
import Hero from "@/components/ui/home/Hero";
import ProductShowcase from "@/components/common/ProductShowcase";
import GetApp from "@/components/ui/home/GetApp";


export default function Home() {
  return (
    <div>
      <MainLayout>
        <section>
          <Hero></Hero>
        </section>
       <section>
         <Categories></Categories>
       </section>
        <section>
          <Facilities></Facilities>
        </section>
        <section>
          <ProductShowcase title={"Featured Products"}></ProductShowcase>
        </section>
        <section>
          <GetApp></GetApp>
        </section>
      </MainLayout>
    </div>
  );
}
