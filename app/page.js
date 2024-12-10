import Image from "next/image";
import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";


export default function Home() {
  return (

<div className=" gg-stone-900 grid py-4 h-screen">
  <Header/>
   <Todo/>
   <Footer/>
    </div>
  );
}

