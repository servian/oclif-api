const { Command, flags } = require("@oclif/command");
const express = require("express");

class APICommand extends Command {
  async run() {
    const { flags } = this.parse(APICommand);
    const port = flags.port;

    try {
      var app = express();
      app.use(express.json());

      app.get("/", (req, res) => {});

      app.get("/favicon.ico", (req, res) => {});

      app.get("/service-worker.js", (req, res) => {});

      app.get("/*", async (req, res) => {
        // Generate class path from route
        var classPath = req.path.replace(/\/$/gm, "").slice(1);

        // Import command from class path
        const commandClass = require(`./${classPath}.js`);

        // Create command parameters
        var parameters = ["--api"];
        for (var key in req.query) {
          parameters.push("--" + key);
          parameters.push(req.query[key]);
        }

        // Execute command
        res.status(200).json([await commandClass.run(parameters)]);
      });

      app.listen(port, () => {
        console.log(`API server running at http://localhost:${port}`);
      });
    } catch (error) {
      // error handling here
    }
  }
}

APICommand.description = "API";

APICommand.flags = {
  port: flags.string({ description: "API port", default: 3000 }),
};

module.exports = APICommand;
