# mynewcli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![License](https://img.shields.io/npm/l/mynewcli.svg)](https://github.com/servian/oclif-api/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g mynewcli
$ mynewcli COMMAND
running command...
$ mynewcli (-v|--version|version)
mynewcli/0.0.0 darwin-x64 node-v16.13.1
$ mynewcli --help [COMMAND]
USAGE
  $ mynewcli COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`mynewcli api`](#mynewcli-api)
- [`mynewcli hello`](#mynewcli-hello)
- [`mynewcli help [COMMAND]`](#mynewcli-help-command)

## `mynewcli api`

API

```
USAGE
  $ mynewcli api

OPTIONS
  --port=port  [default: 3000] API port
```

_See code: [src/commands/api.js](https://github.com/servian/oclif-api/blob/v0.0.0/src/commands/api.js)_

## `mynewcli hello`

Describe the command here

```
USAGE
  $ mynewcli hello

OPTIONS
  -n, --name=name  name to print
  --api            use api
```

_See code: [src/commands/hello.js](https://github.com/servian/oclif-api/blob/v0.0.0/src/commands/hello.js)_

## `mynewcli help [COMMAND]`

display help for mynewcli

```
USAGE
  $ mynewcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.13/src/commands/help.ts)_

<!-- commandsstop -->
