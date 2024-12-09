import Navbar from "@/components/Navbar";
import "../../lib/fontawesome"
import Herosection from "@/components/Herosection";
import Feature from "@/components/Feature";
import Productbox from "@/components/Productbox";
import Popularproduct from "@/components/Popularproduct";
import Emailsignup from "@/components/Emailsignup";
import Emailjoin from "@/components/Emailjoin";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Feature/>
      <Productbox/>
      <Popularproduct/>
      <Emailsignup/>
     <Emailjoin/>
      <Footer/>
      </div>
  );
}
