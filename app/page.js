import Image from "next/image";
import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div className=" bg-stone-900 grid py-16 h-screen">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}
