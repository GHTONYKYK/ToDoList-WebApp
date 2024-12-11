import Image from "next/image";
import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white grid py-16 h-screen">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}
