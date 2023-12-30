import Hero from "@/components/landingpage/hero";
import Nav from "@/components/landingpage/nav";
import Contact from "@/components/landingpage/contact";
import Discover from "@/components/landingpage/discover";

export default function Home() {
  return (
    <main className="w-screen h-fit relative ">
      <Nav />
      <Hero />
      <Discover />
      <Contact />
    </main>
  );
}
