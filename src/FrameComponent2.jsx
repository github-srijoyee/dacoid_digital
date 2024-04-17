const FrameComponent2 = () => {
    return (
      <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-left text-[0.75rem] text-cornflowerblue-100 font-montserrat">
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[3.125rem] rounded-xl flex flex-row items-start justify-start pt-[1.125rem] px-[1.25rem] pb-[1.063rem] box-border font-montserrat font-semibold text-[0.75rem] text-gray-100 min-w-[12.875rem]"
          placeholder="First Name"
          type="text"
        />
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[3.125rem] rounded-xl flex flex-row items-start justify-start pt-[1.125rem] px-[1.25rem] pb-[1.063rem] box-border font-montserrat font-semibold text-[0.75rem] text-gray-100 min-w-[12.875rem]"
          placeholder="Last Name "
          type="text"
        />
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[3.125rem] rounded-xl flex flex-row items-start justify-start pt-[1.125rem] px-[1.25rem] pb-[1.063rem] box-border font-montserrat font-semibold text-[0.75rem] text-gray-100 min-w-[12.875rem]"
          placeholder="Email"
          type="text"
        />
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[3.125rem] rounded-xl flex flex-row items-start justify-start pt-[1.125rem] px-[1.25rem] pb-[1.063rem] box-border font-montserrat font-semibold text-[0.75rem] text-gray-100 min-w-[12.875rem]"
          placeholder="Password"
          type="text"
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.25rem]">
          <input
            className="m-0 h-[1.375rem] w-[1.375rem] relative"
            type="checkbox"
          />
          <div className="relative leading-[177.9%] font-medium">
            <span className="text-gray-700">{`By proceeding, I agree to all `}</span>
            <span className="[text-decoration:underline]">{`T&C`}</span>
            <span className="text-crimson">{` `}</span>
            <span className="text-gray-700 whitespace-pre-wrap">{`and  `}</span>
            <span className="[text-decoration:underline]">Privacy Policy</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent2;