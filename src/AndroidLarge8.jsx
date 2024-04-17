import FrameComponent14 from "./FrameComponent14";
import FrameComponent13 from "./FrameComponent13";
import FrameComponent12 from "./FrameComponent12";
import FrameComponent11 from "./FrameComponent11";

const AndroidLarge8 = () => {
  return (
    <div className="w-full relative rounded-3xs bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border gap-[3.418rem] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.875rem] box-border max-w-full">
        <FrameComponent14 />
      </section>
      <div className="self-stretch h-[2.75rem] relative bg-white hidden" />
      <section className="self-stretch flex flex-col items-start justify-start gap-[1.018rem] max-w-full text-left text-[1rem] text-black font-montserrat">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.062rem] pl-[1rem] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit">
              Upcoming Workout
            </h2>
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.75rem] text-gray-100">
              <div className="relative font-medium inline-block min-w-[3.625rem]">
                See more
              </div>
            </div>
          </div>
        </div>
        <FrameComponent13 />
        <FrameComponent12 />
        <div className="flex flex-row items-start justify-start py-[0rem] px-[1.062rem]">
          <h2 className="m-0 relative text-inherit font-semibold font-inherit">
            What Do You Want to Train
          </h2>
        </div>
        <FrameComponent11 />
      </section>
    </div>
  );
};

export default AndroidLarge8;