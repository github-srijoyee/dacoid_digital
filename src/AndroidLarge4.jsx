import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";

const AndroidLarge4 = () => {
  return (
    <div className="w-full relative rounded-[10px] bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[0.75rem] pb-[1.813rem] pr-[0.9rem] pl-[0.875rem] box-border gap-[2.75rem] leading-[normal] tracking-[normal]">
      <FrameComponent3 />
      <section className="self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[4.813rem] pr-[0.1rem] pl-[0.125rem] box-border max-w-full">
        <FrameComponent2 />
      </section>
      <div className="w-[23.438rem] h-[2.75rem] relative bg-white hidden max-w-full" />
      <FrameComponent1 />
    </div>
  );
};

export default AndroidLarge4;