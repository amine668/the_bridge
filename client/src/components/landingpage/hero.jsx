import backgroundImage from "/public/bg.jpg";

const hero = () => {
  return (
    <div
      className="screen h-screen bg-slate-200 flex justify-center items-center"
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="flex-col flex justify-center items-center w-fit max-w-[800px] p-12 gap-8 bg-white/80">
        <div className=" text-4xl text-center font-bold">
          Improve your skills on your own To prepare for a better future
        </div>
        <div className="cursor-pointer text-xl bg-[#AF2F64] py-3 px-12 font-semibold text-white rounded-full">
          REGISTER NOW
        </div>
      </div>
    </div>
  );
};

export default hero;
