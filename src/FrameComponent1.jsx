import google from "./assets/google.svg"
import facebook from "./assets/facebook.svg"

const FrameComponent1 = () => {
    return (
      <section className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.1rem] pl-[0.125rem] box-border max-w-full text-left text-[0.75rem] text-black font-montserrat">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.375rem] max-w-full">
          <button className="cursor-pointer [border:none] py-[0.938rem] px-[1.25rem] bg-[transparent] self-stretch rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full">
            <div className="h-[3.125rem] w-[21.438rem] relative rounded-xl [background:linear-gradient(270deg,_#7b91ff,_#95beff)] hidden max-w-full" />
            <div className="w-[9.563rem] relative text-[1rem] font-semibold font-montserrat text-white text-center inline-block z-[1]">
              Create an Account
            </div>
          </button>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-[0rem] px-[0rem] pb-[0.188rem] gap-[0.5rem]">
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.563rem] px-[0rem] pb-[0rem] box-border min-w-[6.375rem]">
              <div className="self-stretch h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-gray-100" />
            </div>
            <div className="relative font-medium inline-block min-w-[0.938rem]">
              Or
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[0.563rem] px-[0rem] pb-[0rem] box-border min-w-[6.375rem]">
              <div className="self-stretch h-[0.031rem] relative box-border border-t-[0.5px] border-solid border-gray-100" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[0.25rem] pr-[1.313rem] pl-[1.25rem]">
            <div className="flex flex-row items-start justify-start gap-[1.125rem]">
              <div className="h-[2.75rem] w-[2.75rem] relative rounded-lg box-border border-[1px] border-solid border-gray-100">
                <div className="absolute top-[0rem] left-[0rem] rounded-lg box-border w-full h-full hidden border-[1px] border-solid border-gray-100" />
                <img
                  className="absolute top-[0.813rem] left-[0.813rem] w-[2rem] h-[2rem] overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src={google}
                />
              </div>
              <div className="h-[2.75rem] w-[2.75rem] relative rounded-lg box-border border-[1px] border-solid border-gray-100">
                <div className="absolute top-[0rem] left-[0rem] rounded-lg box-border w-full h-full hidden border-[1px] border-solid border-gray-100" />
                <img
                  className="absolute top-[0.813rem] left-[0.813rem] w-[2rem] h-[2rem] z-[1]"
                  loading="lazy"
                  alt=""
                  src={facebook}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[2rem]">
            <div className="relative font-medium">
              <span>{`Already have an account? `}</span>
              <span className="[text-decoration:underline] text-cornflowerblue-200">
                Login
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FrameComponent1;