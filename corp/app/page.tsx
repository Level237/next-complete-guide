import Image from "next/image"
import homeImg from "@/public/home.jpg";

export default function Home() {
  return (
    <div>
      
      Homepage
      {/*<Image
      src={homeImg}
      alt="car factory"
      fill
      style={{ objectFit:"cover" }}
  />*/}

  <div className="flex flex-row">
    <div className="absolute -z-10 inset-0">
    <Image   src={homeImg} fill alt="car factory"/>
    </div>
   
    <div>Buy our product</div>
  </div>
    </div>
  
  );
}
