
import Main from "@/components/ui/Main";
import Blog from "@/components/layout/blog/Blog";
import AdvertiseBanner from "@/components/ui/AdvertiseBanner";

export default function BlogPage() {
  return (
    <Main>
      <Blog />
      <AdvertiseBanner marginTopClass={"mt-0"}/>
    </Main>
  );
}
