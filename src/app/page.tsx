import { CallToAction } from "page-content/home/cta";
import { Hero } from "page-content/home/hero";
import { LargeScreenshotSection } from "page-content/home/large-screenshot";

export default function Page() {
  return (
    <>
      <Hero />
      <LargeScreenshotSection />
      <CallToAction />
    </>
  );
}
