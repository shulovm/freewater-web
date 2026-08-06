import { About } from "../components/sections/About";
import { Activity } from "../components/sections/Activity";
import { Faq } from "../components/sections/Faq";
import { Hero } from "../components/sections/Hero";
import { How } from "../components/sections/How";
import { Join } from "../components/sections/Join";
import { Metrics } from "../components/sections/Metrics";
import { SiteFooter } from "../components/sections/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Activity />
      <How />
      <Metrics />
      <Join />
      <Faq />
      <SiteFooter />
    </main>
  );
}
