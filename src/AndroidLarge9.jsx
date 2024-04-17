import FrameComponent10 from "./FrameComponent10";
import FrameComponent9 from "./FrameComponent9";
import FrameComponent8 from "./FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent6 from "./FrameComponent6";
import search from "./assets/search.svg";
import group from "./assets/group.svg";

const AndroidLarge9 = () => {
  return (
    <div className="w-full relative rounded-3xs bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border gap-[2.381rem] leading-[normal] tracking-[normal]">
      <div className="w-[calc(100%_+_0.5px)] h-[0.031rem] absolute !m-[0] top-[19.813rem] right-[-0.031rem] left-[0rem] box-border border-t-[0.5px] border-solid border-gray-200" />
      <div className="w-[calc(100%_+_0.5px)] h-[0.031rem] absolute !m-[0] right-[-0.031rem] bottom-[10.469rem] left-[0rem] box-border border-t-[0.5px] border-solid border-gray-200" />
      <div className="w-full h-[0.063rem] absolute !m-[0] top-[24.5rem] right-[0rem] left-[0rem]">
        <div className="absolute top-[0rem] left-[0rem] box-border w-[23.469rem] h-[0.031rem] z-[1] border-t-[0.5px] border-solid border-gray-200" />
        <div className="absolute top-[0rem] left-[0.438rem] box-border w-[19.25rem] h-[0.063rem] z-[2] border-t-[1px] border-solid border-royalblue-100" />
      </div>
      <div className="w-[11.563rem] h-[0.625rem] relative bg-gray-100 hidden z-[3]" />
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.875rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[0.875rem] max-w-full">
          <FrameComponent10 />
          <FrameComponent9 />
        </div>
      </section>
      <div className="self-stretch h-[2.75rem] relative bg-white hidden z-[5]" />
      <section className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] max-w-full text-center text-[0.75rem] text-black font-montserrat">
        <div className="flex flex-row items-start justify-start pt-[0rem] px-[1rem] pb-[0.25rem]">
          <div className="relative font-semibold inline-block min-w-[3.688rem] whitespace-nowrap">
            06:00 AM
          </div>
        </div>
        <FrameComponent8 />
        <div className="flex flex-row items-start justify-start pt-[0rem] px-[1.187rem] pb-[0.187rem]">
          <div className="relative font-semibold inline-block min-w-[3.25rem] whitespace-nowrap">
            11:00 AM
          </div>
        </div>
        <div className="self-stretch h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-gray-200" />
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.281rem] box-border gap-[0.55rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.812rem]">
          <div className="relative font-semibold inline-block min-w-[3.625rem] px-4 whitespace-nowrap">
            12:00 AM
          </div>
            <div className="self-stretch h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-gray-200" />
          </div>
          <FrameComponent7 />
          <div className="self-stretch h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-gray-200" />
          <FrameComponent6 />
          <div className="self-stretch h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-gray-200" />
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[1rem]">
          <div className="relative font-semibold inline-block min-w-[3.625rem] whitespace-nowrap">
            05:00 AM
          </div>
        </div>
        <div className="self-stretch h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-gray-200" />
        <footer className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <div className="h-[3.938rem] w-[3.938rem] absolute !m-[0] top-[-1.562rem] left-[calc(50%_-_31.5px)] z-[1] flex items-center justify-center">
            <img
              className="h-full w-full z-[1] object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(1.206)]"
              loading="lazy"
              alt=""
              src={search}
            />
          </div>
          <button className="cursor-pointer [border:none] pt-[1.368rem] px-[1.625rem] pb-[1.656rem] bg-white flex-1 flex flex-row items-start justify-start box-border max-w-full">
            <div className="h-[4.75rem] w-[23.438rem] relative bg-white hidden max-w-full" />
            <img
              className="h-[1.725rem] flex-1 relative max-w-full overflow-hidden z-[2]"
              alt=""
              src={group}
            />
          </button>
        </footer>
      </section>
    </div>
  );
};

export default AndroidLarge9