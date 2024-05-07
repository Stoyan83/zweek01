import Main from "@/components/ui/Main";
import Pricing from "@/components/layout/pricing/Pricing";
import Questions from "@/components/layout/pricing/Questions";
import AdvertiseBanner from "@/components/ui/AdvertiseBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roooby Pricing",
  description: "Discover the best prices and plans tailored to your business needs with Roooby Pricing. Find cost-effective solutions to boost your business efficiency and growth.",
};

export default function PricingPage() {
  return (
    <Main>
      <Pricing />
      <Questions />
      <AdvertiseBanner />
    </Main>
  );
}
