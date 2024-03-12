import Nav from "./components/Nav";
import {  CoustemerReview,
  Footer,
  Hero,
  PopularProduct,
  Service,
  SpecialOffer,
  Subscribe,
  SuperqulityProduct} from "./sections/index";

export default function App() {
  return (
    <main>
      <Nav/>
      <section className=" xl:padding-1 wide:padding-r padding-b ">
        <Hero/>
      </section>
      <section className=" padding">
        <PopularProduct/>
      </section>
      <section className=" padding">
        <SuperqulityProduct/>
      </section>
      <section className=" padding-x py-10">
        <Service/>
      </section>
      <section className=" padding">
        <SpecialOffer/>
      </section>
      <section className=" padding bg-pale-blue">
        <CoustemerReview/>
      </section>
      <section className=" padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}