import cellularconnection from "./assets/cellularconnection.svg"
import wifi from "./assets/wifi.svg"
import chevronleft from "./assets/chevronleft.svg"
import arrowleft from "./assets/arrowleft.svg"
import arrowright from "./assets/arrowright.svg"

const FrameComponent10 = () => {
    return (
      <header className="self-stretch flex flex-row items-start justify-start gap-[1.437rem] shrink-0 [debug_commit:1de1738] text-center text-[0.938rem] text-gray-300 font-montserrat">
        <div className="w-[3.375rem] flex flex-col items-start justify-start gap-[2.5rem]">
          <div className="self-stretch relative tracking-[-0.3px] font-semibold whitespace-nowrap">
            9:41
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
            <img
              className="h-[1.25rem] w-[1.25rem] relative rounded-10xs overflow-hidden shrink-0"
              alt=""
              src={chevronleft}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] text-[1.25rem] text-black">
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.687rem]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[3.25rem] px-[0rem] pb-[0rem]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[0.875rem]">
                <h2 className="m-0 relative text-inherit font-semibold font-inherit whitespace-nowrap">
                  Workout Schedule
                </h2>
                <div className="flex flex-row items-start justify-center py-[0rem] pr-[3.187rem] pl-[3.25rem] text-[0.75rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.687rem]">
                    <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[0.313rem] h-[0.5rem] relative"
                        loading="lazy"
                        alt=""
                        src={arrowleft}
                      />
                    </div>
                    <div className="relative font-semibold inline-block min-w-[3.563rem] whitespace-nowrap">
                      Feb 2024
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[0.313rem] h-[0.5rem] relative object-contain"
                        loading="lazy"
                        alt=""
                        src={arrowright}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.312rem]">
              <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
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
          </div>
        </div>
      </header>
    );
  };
  
  export default FrameComponent10;