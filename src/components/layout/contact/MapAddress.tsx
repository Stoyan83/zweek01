import Section from "@/components/ui/Section";

const MapAddress = () => {
  return (
    <div>
      <p className="text-lg font-bold">Roooby Technologies</p>
      <p className="text-lg font-medium">
        Plovdiv, Bulgaria, bul Vasil Levski 96
      </p>
      <div className="mt-7 max-w-[456px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d23661.304981853667!2d24.73369452710239!3d42.157495207563706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14acd18de452a06b%3A0x838e93baa43989e5!2z0KHQtdCy0LXRgNC10L0sINGD0LsuIOKAntCS0LDRgdC40Lsg0JvQtdCy0YHQutC44oCcIDk2LCA0MDAzINCf0LvQvtCy0LTQuNCy!3m2!1d42.1625957!2d24.743444399999998!5e0!3m2!1sbg!2sbg!4v1714642166594!5m2!1sbg!2sbg"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy={"no-referrer-when-downgrade"}
          className="w-full"
        ></iframe>
      </div>
      <div className="max-w-[430px] flex flex-wrap justify-between mt-6">
        <div className="pl-[15px] border-l-[1px] border-l-placeholder-grey">
          <p className="text-lg font-bold">General</p>
          <p className="text-lg font-medium">hello@me.com</p>
        </div>
        <div className="border-l-[1px] pl-[15px] border-l-placeholder-grey">
          <p className="text-lg font-bold">Support</p>
          <p className="text-lg font-medium">support@me.com</p>
        </div>
      </div>
    </div>
  );
};

export default MapAddress;
