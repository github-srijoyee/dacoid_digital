import search from "./assets/search.svg";
import group from "./assets/group.svg";
import girl from "./assets/girl.svg"

const FrameComponent11 = () => {
    return (
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-[0.75rem] text-black font-montserrat">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1rem] box-border max-w-full">
          <div className="flex-1 rounded-xl bg-cornflowerblue-200 shadow-[-4px_8px_25px_-8px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start pt-[1rem] pb-[0.5rem] pr-[0.75rem] pl-[1rem] box-border gap-[1.75rem] max-w-full">
            <div className="h-[7.75rem] w-[21.438rem] relative rounded-xl bg-cornflowerblue-200 shadow-[-4px_8px_25px_-8px_rgba(0,_0,_0,_0.15)] hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[7.625rem]">
              <div className="relative font-medium inline-block min-w-[7.125rem] z-[1]">
                Full Body Workout
              </div>
              <div className="self-stretch h-[4.688rem] flex flex-col items-start justify-start text-[0.625rem]">
                <div className="relative font-medium inline-block min-w-[1.688rem] z-[1]">
                  Arms
                </div>
                <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                    <div className="relative font-medium inline-block min-w-[1.875rem] z-[1]">
                      Chest
                    </div>
                  </div>
                  <div className="h-[3.938rem] w-[3.938rem] relative z-[4] flex items-center justify-center">
                    <img
                      className="h-full w-full z-[4] object-contain absolute left-[0rem] top-[0.25rem] [transform:scale(1.206)]"
                      loading="lazy"
                      alt=""
                      src={search}
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[6.25rem] w-[6.25rem] relative rounded-[50%] object-cover min-h-[6.25rem] z-[1]"
              loading="lazy"
              alt=""
              src={girl}
            />
          </div>
        </div>
        <footer className="self-stretch bg-white flex flex-row items-start justify-start pt-[1.381rem] px-[1.812rem] pb-[1.668rem] box-border max-w-full z-[2] mt-[-2.938rem]">
          <div className="h-[4.75rem] w-[23.438rem] relative bg-white hidden max-w-full" />
          <img
            className="h-[1.7rem] flex-1 relative max-w-full overflow-hidden z-[3]"
            alt=""
            src={group}
          />
        </footer>
      </div>
    );
  };
  
  export default FrameComponent11;