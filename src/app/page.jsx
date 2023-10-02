import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
  <main className="bg-color max-h-screen">
    <div className='mx-auto'>
      <Navbar/>
    <h1 className="text-white my-10">Hello</h1>
    <Footer/>
    </div>
     
  </main>
  )
}
