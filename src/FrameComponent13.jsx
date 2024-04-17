import girll from "./assets/girll.svg"

const FrameComponent13 = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-left text-[0.75rem] text-black font-montserrat">
        <div className="flex-1 rounded-xl bg-white shadow-[-4px_8px_25px_-8px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-between pt-[0.812rem] px-[1rem] pb-[0.75rem] box-border max-w-full gap-[1.25rem]">
          <div className="h-[4.688rem] w-[21.438rem] relative rounded-xl bg-white shadow-[-4px_8px_25px_-8px_rgba(0,_0,_0,_0.15)] hidden max-w-full" />
          <div className="flex flex-row items-start justify-start gap-[0.562rem]">
            <img
              className="h-[3.125rem] w-[3.125rem] relative rounded-[50%] object-cover z-[1]"
              loading="lazy"
              alt=""
              src={girll}
            />
            <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative font-medium inline-block min-w-[7.125rem] z-[1]">
                  Full Body Workout
                </div>
                <div className="relative text-[0.625rem] font-medium text-gray-600 inline-block min-w-[3.5rem] z-[1]">
                  Today 3pm
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem]">
            <div className="w-[2.5rem] h-[1.25rem] relative z-[1]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[14.29px] bg-cornflowerblue-100 box-border border-[0.7px] border-solid border-darkslateblue" />
              <div className="absolute h-[78.5%] w-[39.25%] top-[10.5%] right-[53.5%] bottom-[11%] left-[7.25%] rounded-[50%] bg-white z-[1]" />
            </div>
          </div>
        </div>
      </div>
    );
}
export default FrameComponent13;