import FrameComponent from "./FrameComponent";
import Image1 from "./assets/image1.png"
import group1 from "./assets/group-1.svg"

export const AndroidLarge1 = () => {
  return (
    <div className="w-full h-[50rem] relative rounded-[10px] bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[0.75rem] pb-[2.75rem] pr-[0.9rem] pl-[0.875rem] box-border gap-[3.938rem] leading-[normal] tracking-[normal] container">
      <main className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[9.875rem] relative gap-[4.25rem] shrink-0 [debug_commit:1de1738]">
        <FrameComponent />
        <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.025rem] box-border max-w-full">
        <img
          className="h-[14.663rem] flex-1 relative max-w-full overflow-hidden object-contain"
          loading="lazy"
          alt=""
          src={Image1}
        />
      </section>
        <section className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.1rem] pl-[0.125rem] box-border max-w-full text-left text-[1.25rem] text-black font-montserrat">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.938rem] max-w-full">
            <div className="relative font-semibold">Track Your Goal</div>
            <div className="self-stretch relative text-[1rem] font-medium text-gray-200">
              Dont worry if you have trouble determining your goals, We can
              help you determine your goals and track your goals
            </div>
          </div>
        </section>
        <img
          className="w-[3.75rem] h-[3.75rem] absolute !m-[0] right-[0.1rem] bottom-[0rem]"
          loading="lazy"
          alt=""
          src={group1}
        />
      </main>
  </div>
  );
};
