# oclif-api

An Express.js API for oclif running within oclif. The api command will start a new Express.js server and expose other oclif commands thanks to oclif's ability to [run other commands programmatically](https://oclif.io/docs/running_programmatically).

## Installing the CLI

```sh
cd mynewcli
npm install -g
```

## Starting the API

```sh
mynewcli api
```

## Testing the API

Visit the [http://localhost:3000/hello](http://localhost:3000/hello) in your browser. Or, try it with a query parameter by visiting [http://localhost:3000/hello?name=John](http://localhost:3000/hello?name=John).
