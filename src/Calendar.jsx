const Calendar = () => {
    return (
      <div className="flex-1 flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[0.006rem] box-border gap-[0.456rem] shrink-0 [debug_commit:1de1738] max-w-full text-center text-[0.713rem] text-royalblue-200 font-quicksand">
        <div className="flex-[0.4418] flex flex-row items-start justify-start pt-[0.425rem] px-[1.093rem] pb-[2.106rem] relative">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[9.96px] bg-white" />
          <div className="h-[2.231rem] flex-1 relative font-semibold inline-block z-[1]">
            <p className="[margin-block-start:0] [margin-block-end:10.67px]">
              Sun
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10.67px] text-[1.781rem] leading-[1.068rem]">
              5
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.112rem] text-white">
          <div className="self-stretch flex flex-row items-start justify-start pt-[0.4rem] px-[1.1rem] pb-[1.993rem] relative">
            <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[9.96px] [background:linear-gradient(-90deg,_#8da4ff,_#d1dbff)]" />
            <div className="h-[2.231rem] flex-1 relative font-semibold inline-block z-[1]">
              <p className="[margin-block-start:0] [margin-block-end:10.67px]">
                Mon
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10.67px] text-[1.781rem] leading-[1.068rem]">
                6
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[0.7863] flex flex-col items-start justify-start pt-[0.425rem] px-[0.418rem] pb-[0.381rem] relative gap-[1.225rem]">
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[9.96px] bg-white" />
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.687rem] pl-[0.675rem]">
            <div className="h-[2.231rem] flex-1 relative font-semibold inline-block z-[1]">
              <p className="[margin-block-start:0] [margin-block-end:10.67px]">
                Tue
              </p>
              <p className="[margin-block-start:0] [margin-block-end:10.67px] text-[1.781rem] leading-[1.068rem]">
                7
              </p>
            </div>
          </div>
          <img
            className="w-[0.55rem] h-[0.5rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/assignment-ind.svg"
          />
        </div>
        <div className="flex-[0.4386] flex flex-row items-start justify-start pt-[0.425rem] px-[1.1rem] pb-[2.106rem] relative">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[9.96px] bg-white" />
          <div className="h-[2.231rem] flex-1 relative font-semibold inline-block z-[1]">
            <p className="[margin-block-start:0] [margin-block-end:10.67px]">
              Wed
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10.67px] text-[1.781rem] leading-[1.068rem]">
              8
            </p>
          </div>
        </div>
        <div className="flex-[0.4386] flex flex-row items-start justify-start pt-[0.425rem] px-[1.1rem] pb-[2.106rem] relative text-darkslategray">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[9.96px] bg-white" />
          <div className="h-[2.231rem] flex-1 relative font-semibold inline-block z-[1]">
            <p className="[margin-block-start:0] [margin-block-end:10.67px]">
              Thu
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10.67px] text-[1.781rem] leading-[1.068rem]">
              9
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Calendar;