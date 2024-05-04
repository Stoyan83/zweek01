import Applications from "@/components/layout/product/Applications";
import Benefits from "@/components/layout/product/Benefits";
import Charts from "@/components/layout/product/Charts";
import ClientsFeedback from "@/components/layout/product/ClientsFeedback";
import News from "@/components/layout/product/News";
import ProductHome from "@/components/layout/product/ProductHome";
import Services from "@/components/layout/product/Services";
import AdvertiseBanner from "@/components/ui/AdvertiseBanner";
import Main from "@/components/ui/Main";


export default function Home() {
  return (
    <Main>
      <ProductHome />
      <Benefits />
      <Services />
      <Applications />
      <News />
      <Charts />
      <ClientsFeedback />
      <AdvertiseBanner customClasses={"pb-10"} />
    </Main>
  );
}
