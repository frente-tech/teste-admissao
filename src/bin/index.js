const DEFAULT_PORT = 3000;
let server;
const startServer = async (app) => {
  const PORT = process.env.SRV_PORT || DEFAULT_PORT;

  server = app.listen(PORT, (err) => {
    if (err) {
      return;
    }
    console.log(`Server is running... Listening on ${PORT}`);
  });
};

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated by SIGTERM');
  });
});

module.exports = startServer;
