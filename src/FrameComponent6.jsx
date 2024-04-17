import plus from "./assets/plus.svg"

const FrameComponent6 = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1rem] pl-[0.937rem] box-border max-w-full text-center text-[0.75rem] text-black font-montserrat">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
          <div className="w-[3.75rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.437rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                <div className="relative font-semibold inline-block min-w-[3.625rem] whitespace-nowrap">
                  03:00 AM
                </div>
              </div>
              <div className="relative font-semibold inline-block min-w-[3.75rem] whitespace-nowrap">
                04:00 AM
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-[0.625rem] px-[1.312rem] pb-[0.562rem] relative text-left text-[2.25rem] text-white">
            <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full max-h-full z-[1] flex items-center justify-center">
              <img
                className="h-full w-full overflow-hidden z-[1] object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(1.206)]"
                loading="lazy"
                alt=""
                src={plus}
              />
            </div>
            <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[1.313rem] z-[2]">
              +
            </h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent6;