import girlll from "./assets/girlll.svg"

const FrameComponent12 = () => {
    return (
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full text-left text-[0.75rem] text-black font-montserrat">
        <div className="flex-1 rounded-xl bg-white shadow-[-4px_8px_25px_-8px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start pt-[0.812rem] px-[1rem] pb-[0.75rem] box-border relative gap-[0.562rem] max-w-full">
          <div className="h-[4.688rem] w-[21.438rem] relative rounded-xl bg-white shadow-[-4px_8px_25px_-8px_rgba(0,_0,_0,_0.15)] hidden max-w-full z-[0]" />
          <img
            className="h-[3.125rem] w-[3.125rem] relative rounded-[50%] object-cover z-[1]"
            loading="lazy"
            alt=""
            src={girlll}
          />
          <div className="h-[1.25rem] w-[2.5rem] absolute !m-[0] right-[1rem] bottom-[1.688rem] z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[14.29px] bg-cornflowerblue-100 box-border border-[0.7px] border-solid border-darkslateblue" />
            <div className="absolute h-[78.5%] w-[39.25%] top-[10.5%] right-[53.5%] bottom-[11%] left-[7.25%] rounded-[50%] bg-white z-[1]" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="relative font-medium z-[1]">Upper Body Workout</div>
              <div className="relative text-[0.625rem] font-medium text-gray-600 inline-block min-w-[4.625rem] whitespace-nowrap z-[1]">
                4 Feb, 3:30 pm
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent12;