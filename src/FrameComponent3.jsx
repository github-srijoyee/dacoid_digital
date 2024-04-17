import cellularconnection from "./assets/cellularconnection.svg"
import wifi from "./assets/wifi.svg"

const FrameComponent3 = () => {
    return (
      <header className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-center text-[0.938rem] text-gray-200 font-montserrat">
        <div className="flex flex-col items-start justify-start gap-[2.375rem]">
          <div className="w-[3.375rem] relative tracking-[-0.3px] font-semibold inline-block">
            9:41
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.125rem] text-left text-[1.25rem] text-black font-roboto-serif">
            <h2 className="m-0 w-[10.188rem] relative text-inherit leading-[1.45rem] font-semibold font-inherit inline-block whitespace-nowrap">
              Create an account
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[0.313rem]">
            <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.063rem] h-[0.669rem] relative"
                loading="lazy"
                alt=""
                src={cellularconnection}
              />
            </div>
            <img
              className="h-[0.688rem] w-[0.956rem] relative"
              loading="lazy"
              alt=""
              src={wifi}
            />
            <div className="h-[0.706rem] w-[1.519rem] relative">
              <div className="absolute top-[0rem] right-[0.144rem] rounded-[2.67px] box-border w-[1.375rem] h-[0.706rem] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-gray-200" />
              <img
                className="absolute top-[0.231rem] right-[0rem] w-[0.081rem] h-[0.25rem] mix-blend-normal"
                loading="lazy"
                alt=""
                src="/cap.svg"
              />
              <div className="absolute top-[0.125rem] right-[0.269rem] rounded-[1.33px] bg-gray-200 w-[1.125rem] h-[0.456rem] z-[1]" />
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default FrameComponent3;