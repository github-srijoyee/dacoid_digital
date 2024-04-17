import hide from "./assets/hide.svg"

const FrameComponent5 = () => {
    return (
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-left text-[0.75rem] text-gray-100 font-montserrat">
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[3.125rem] rounded-xl flex flex-row items-start justify-start pt-[1.125rem] px-[1.25rem] pb-[1.063rem] box-border font-montserrat font-semibold text-[0.75rem] text-gray-100 min-w-[12.875rem]"
          placeholder="Email"
          type="text"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] max-w-full">
          <div className="self-stretch rounded-xl bg-whitesmoke flex flex-row items-start justify-between py-[1.063rem] pr-[1rem] pl-[1.25rem] box-border max-w-full gap-[1.25rem]">
            <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl bg-whitesmoke hidden max-w-full" />
            <input
              className="w-[3.75rem] [border:none] [outline:none] bg-[transparent] h-[1rem] flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] box-border font-montserrat font-semibold text-[0.75rem] text-gray-100"
              placeholder="Password"
              type="text"
            />
            <img
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem] z-[1]"
              alt=""
              src={hide}
            />
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.313rem]">
            <div className="relative [text-decoration:underline] font-medium">
              <span className="text-gray-500 relative [text-decoration:underline] font-medium">Forgot your password?</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent5;