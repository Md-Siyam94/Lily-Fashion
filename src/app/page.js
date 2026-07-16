import MainLayout from "@/components/layout/MainLayout";
import Categories from "@/components/ui/home/Categories";
import Facilities from "@/components/ui/home/Facilities";
import Featured from "@/components/ui/home/Featured";
import Hero from "@/components/ui/home/Hero";


export default function Home() {
  return (
    <div>
      <MainLayout>
         <Hero></Hero>
    <Categories></Categories>
    <Facilities></Facilities>
    <Featured></Featured>
      </MainLayout>
    </div>
  );
}
