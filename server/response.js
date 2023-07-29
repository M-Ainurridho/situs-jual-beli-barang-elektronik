const response = (status, msg, res, data = []) => {
   if (status === 500) {
      return res.status(status).json({
         status,
         msg,
      });
   }

   if (status === 402) {
      return res.status(status).json({
         status,
         msg,
         errors: data,
      });
   }

   return res.status(status).json({
      status,
      msg,
      payload: data,
   });
};

module.exports = { response };
