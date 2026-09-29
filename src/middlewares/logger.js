export const logger = async (req, res, next) => {
  res.on("finish", () => {
    console.log(
      `${[req.method]}- ${req.ip} :: '${req.url}' - ${res.statusCode}`,
    );
  });
  req.user_name = "faith";
  next();
};
