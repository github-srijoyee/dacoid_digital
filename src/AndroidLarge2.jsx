import FrameComponent from "./FrameComponent";
import image2 from "./assets/image2.svg"
import group1 from "./assets/group-1.svg"

export const AndroidLarge2 = () => {
  return (
    <div className="w-full relative rounded-[10px] bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[0.75rem] pb-[12.625rem] pr-[0.75rem] pl-[0.688rem] box-border gap-[5.75rem] leading-[normal] tracking-[normal]">
      <img
        className="w-[3.75rem] h-[3.75rem] absolute !m-[0] right-[1rem] bottom-[2.75rem]"
        loading="lazy"
        alt=""
        src={group1}
      />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.025rem] box-border max-w-full">
        <img
          className="h-[14.663rem] flex-1 relative max-w-full overflow-hidden object-contain"
          loading="lazy"
          alt=""
          src={image2}
        />
      </section>
      <div className="w-[23.438rem] h-[2.75rem] relative bg-white hidden max-w-full z-[3]" />
      <section className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.25rem] pl-[0.313rem] box-border max-w-full text-left text-[1.25rem] text-black font-montserrat">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.938rem] max-w-full">
          <div className="relative font-semibold inline-block min-w-[5.813rem]">
            Get Burn
          </div>
          <div className="self-stretch relative text-[1rem] font-medium text-gray-200">
            Let’s keep burning to achieve your goals, it hurts only temporarily,
            if you give up now you will be in pain forever
          </div>
        </div>
      </section>
    </div>
  );
};
