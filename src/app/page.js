import MainLayout from "@/components/layout/MainLayout";
import Categories from "@/components/ui/home/Categories";
import Hero from "@/components/ui/home/Hero";


export default function Home() {
  return (
    <div>
      <MainLayout>
         <Hero></Hero>
    <Categories></Categories>
      </MainLayout>
    </div>
  );
}
