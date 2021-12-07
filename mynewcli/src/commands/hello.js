const { Command, flags } = require("@oclif/command");

class HelloCommand extends Command {
  async run() {
    const { flags } = this.parse(HelloCommand);
    const name = flags.name || "world";
    const api = flags.api;

    if (api) {
      return `hello ${name} from ./src/commands/hello.js`;
    } else {
      this.log(`hello ${name} from ./src/commands/hello.js`);
    }
  }
}

HelloCommand.description = "Describe the command here";

HelloCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
  api: flags.boolean({ description: "use api", default: false }),
};

module.exports = HelloCommand;
