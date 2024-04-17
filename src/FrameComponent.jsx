import cellularconnection from "./assets/cellularconnection.svg"
import wifi from "./assets/wifi.svg"


const FrameComponent = () => {
    return (
      <header className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-center text-[0.938rem] text-gray-300 font-montserrat">
        <div className="w-[3.375rem] relative tracking-[-0.3px] font-semibold inline-block shrink-0">
          9:41
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] text-left text-[1rem] text-cornflowerblue">
          <div className="flex flex-row items-start justify-start gap-[0.313rem]">
            <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.063rem] h-[0.669rem] relative"
                loading="lazy"
                alt=""
                src={cellularconnection}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.044rem]">
              <div className="flex flex-row items-start justify-start gap-[0.313rem]">
                <img
                  className="h-[0.688rem] w-[0.956rem] relative"
                  loading="lazy"
                  alt=""
                  src={wifi}
                />
                <div className="h-[0.706rem] w-[1.519rem] relative">
                  <div className="absolute top-[0rem] right-[0.144rem] rounded-[2.67px] box-border w-[1.375rem] h-[0.706rem] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-gray-300" />
                  <img
                    className="absolute top-[0.231rem] right-[0rem] w-[0.081rem] h-[0.25rem] mix-blend-normal"
                    loading="lazy"
                    alt=""
                    src="/cap.svg"
                  />
                  <div className="absolute top-[0.125rem] right-[0.269rem] rounded-[1.33px] bg-gray-300 w-[1.125rem] h-[0.456rem] z-[1]" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.125rem] pl-[0.438rem]">
                <div className="relative [text-decoration:underline] font-medium inline-block min-w-[2.25rem] whitespace-nowrap text-cornflowerblue-200">
                  Skip
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default FrameComponent;