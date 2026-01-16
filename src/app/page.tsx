import Image from "next/image";
import HeadingSection from "@/components/HeadingSection";
import Gridcards from "@/components/GridCards";
export default function Home() {
  return (
    <>
      <div className=" min-h-screen text-white font-sans bg-black">
        <HeadingSection />
        <Gridcards />
      </div>
    </>
  );
}
