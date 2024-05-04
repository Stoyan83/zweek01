"use client";
import Main from "@/components/ui/Main";
import Pricing from "@/components/layout/pricing/Pricing";
import Questions from "@/components/layout/pricing/Questions";
import AdvertiseBanner from "@/components/ui/AdvertiseBanner";

export default function PricingPage() {
  return (
    <Main>
      <Pricing />
      <Questions />
      <AdvertiseBanner />
    </Main>
  );
}
