const { format, createLogger, transports } = require("winston");

module.exports = createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf(
      (param) => `${param.timestamp} ${param.level}: ${param.message}`
    )
  ),
  transports: [new transports.File({ filename: "error.log", level: "error" })],
});

// //
// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// //
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple(),
//   }));
// }
