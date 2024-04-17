import cellularconnection from "./assets/cellularconnection.svg"
import wifi from "./assets/wifi.svg"
import cap from "./assets/cap.svg"
import box from "./assets/box.svg"

const AndroidLarge6 = () => {
    return (
      <div className="w-full relative rounded-[10px] bg-gray-100 overflow-hidden flex flex-col items-end justify-start pt-[0.75rem] pb-[5.313rem] pr-[0.9rem] pl-[0.875rem] box-border gap-[9.375rem] leading-[normal] tracking-[normal]">
        <section className="self-stretch flex flex-col items-start justify-start gap-[2.375rem] max-w-full text-left text-[0.938rem] text-black font-montserrat">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-center text-gray-200">
            <div className="w-[3.375rem] relative tracking-[-0.3px] font-semibold inline-block shrink-0">
              9:41
            </div>
            <div className="w-[4.163rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.313rem]">
                <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.063rem] h-[0.669rem] relative"
                    alt=""
                    src={cellularconnection}
                  />
                </div>
                <img
                  className="h-[0.688rem] w-[0.956rem] relative"
                  alt=""
                  src={wifi}
                />
                <div className="h-[0.706rem] w-[1.519rem] relative">
                  <div className="absolute top-[0rem] right-[0.144rem] rounded-[2.67px] box-border w-[1.375rem] h-[0.706rem] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-gray-200" />
                  <img
                    className="absolute top-[0.231rem] right-[0rem] w-[0.081rem] h-[0.25rem] mix-blend-normal "
                    alt=""
                    src={cap}
                  />
                  <div className="absolute top-[0.125rem] right-[0.269rem] rounded-[1.33px] bg-gray-200 w-[1.125rem] h-[0.456rem] z-[1]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-[0rem] px-[4rem] pb-[0.313rem] text-[1.25rem]">
            <h2 className="m-0 relative text-inherit font-semibold font-inherit">
              What are your goals?
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full text-[0.75rem]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] max-w-full">
              <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-start justify-between py-[0.875rem] pr-[1rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem]">
                <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl bg-gray-50 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <div className="relative font-semibold inline-block min-w-[4.813rem] z-[1]">
                    Weight Loss
                  </div>
                </div>
                <div className="h-[1.375rem] w-[1.375rem] relative z-10 border-[#809AFF]">
  <input
    className="m-0 absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded box-border border-2 border-solid border-[#809AFF]"
    type="checkbox"
  />
</div>


              </div>
              <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-start justify-between py-[0.875rem] pr-[1rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem]">
                <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl bg-gray-50 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <div className="relative font-semibold inline-block min-w-[4.75rem] z-[1]">
                    Muscle Gain
                  </div>
                </div>
                <div className="h-[1.375rem] w-[1.375rem] relative z-[1]">
                  <input
                    className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[1px] border-solid border-cornflowerblue"
                    type="checkbox"
                  />
                
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-start justify-between py-[0.875rem] pr-[1rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem]">
                <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl bg-gray-50 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <div className="relative font-semibold inline-block min-w-[4.75rem] z-[1]">
                    Flexibility and Mobility
                  </div>
                </div>
                <div className="h-[1.375rem] w-[1.375rem] relative z-[1]">
                  <input
                    className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[1px] border-solid border-cornflowerblue"
                    type="checkbox"
                  />
     
                
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-start justify-between py-[0.875rem] pr-[1rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem]">
                <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl bg-gray-50 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <div className="relative font-semibold inline-block min-w-[6rem] z-[1]">
                    General Fitness
                  </div>
                </div>
                <div className="h-[1.375rem] w-[1.375rem] relative z-[1]">
                  <input
                    className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[1px] border-solid border-cornflowerblue"
                    type="checkbox"
                  />
              
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-start justify-between py-[0.875rem] pr-[1rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem]">
                <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl bg-gray-50 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <div className="relative font-semibold inline-block min-w-[4.75rem] z-[1]">
                    Event-specific training
                  </div>
                </div>
                <div className="h-[1.375rem] w-[1.375rem] relative z-[1]">
                  <input
                    className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[1px] border-solid border-cornflowerblue"
                    type="checkbox"
                  />
                  
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-gray-50 flex flex-row items-start justify-between py-[0.875rem] pr-[1rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem]">
                <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl bg-gray-50 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                  <div className="relative font-semibold z-[1]">
                    Mindfulness and Mental Health
                  </div>
                </div>
                <div className="h-[1.375rem] w-[1.375rem] relative z-[1]">
                  <input
                    className="m-0 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded box-border border-[1px] border-solid border-cornflowerblue"
                    type="checkbox"
                  />
     
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[23.438rem] h-[2.75rem] relative bg-white hidden max-w-full" />
        <footer className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.1rem] pl-[0.125rem] box-border max-w-full">
          <button className="cursor-pointer [border:none] py-[0.938rem] px-[1.25rem] bg-[transparent] flex-1 rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] flex flex-row items-start justify-center box-border max-w-full">
            <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] hidden max-w-full" />
            <div className="relative text-[1rem] font-semibold font-montserrat text-white text-left inline-block min-w-[4.188rem] z-[1]">
              Confirm
            </div>
          </button>
        </footer>
      </div>
    );
  };
  
  export default AndroidLarge6;