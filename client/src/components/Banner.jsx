const Banner = ({ title }) => {
   return (
      <>
         <div className="banner bg-neutral-100 dark:bg-slate-800 dark:text-white flex justify-center items-center">
            <h1 className="text-3xl lg:text-4xl font-semibold translate-y-7">- {title} -</h1>
         </div>
      </>
   );
};

export default Banner;
