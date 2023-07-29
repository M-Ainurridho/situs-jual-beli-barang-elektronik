const InputError = ({ validation, field }) => {
   return (
      <>
         {validation?.status ? (
            <>{validation.payload === field && <span className="text-sm text-red-500 italic">{validation.msg}</span>}</>
         ) : (
            validation.map(
               (error, i) =>
                  error.path === field && (
                     <span key={i} className="text-sm text-red-500 italic mr-1">
                        {error.msg} -
                     </span>
                  )
            )
         )}
      </>
   );
};

export default InputError;
