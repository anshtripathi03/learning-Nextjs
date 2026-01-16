import Image from "next/image";
import HeadingSection from "@/components/HeadingSection";
import Gridcards from "@/components/GridCards";
import { Whychooseus } from "@/components/Whychooseus";
import { InfiniteMovingCardsDemo } from "@/components/InfinteCards";
export default function Home() {
  return (
    <>
      <div className=" min-h-screen text-white font-sans bg-black">
        <HeadingSection />
        <Gridcards />
        <Whychooseus />
        <InfiniteMovingCardsDemo />
      </div>
    </>
  );
}
