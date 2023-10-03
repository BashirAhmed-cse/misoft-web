import Image from "next/image";
import aiImage from "public/ai.png"

const Hero = () => {
  return (
    <div className="pt-5">
      <div className="flex items-center justify-between px-12 py-2 mx-auto">
        <div className="text-white">
          <h1 className="text-2xl">Dont waste time for poor code, Lets roll with us</h1>
          <p>Carfting incredible digital products for your unique
            and forward-thinking company. All company sizes welcome.
          </p>
          <div>
          <button className='rounded-xl outline outline-offset-4 outline-1 out-color'><span className='mx-3'>Lets Roll</span></button>
          </div>
          
        </div>
        <div>
         <Image 
         className=""
         width={400} height={200}
         src={aiImage}
         alt=""/>
        </div>
       </div>
    </div>
  )
}

export default Hero
