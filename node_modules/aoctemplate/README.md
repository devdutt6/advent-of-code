# Advent of Code

- A Template generator for Advent of Code hackathon.
- It will automatically generate the `input.txt` file and `solution.js` file with the template code so you can directly start writing solution. You don't need to write the same code daily to import file and run it, i handeled it for you.
- Just write your solution in `solution.js` file and run it using command `aocrun` with the character by which you want to split the filelines.

[![NPM](https://img.shields.io/npm/l/aoctemplate)](https://cdn.jsdelivr.net/npm/aoctemplate@0.1.0/LICENSE)
![node-current](https://img.shields.io/node/v/aoctemplate)

## Installation

<hr>

It requires global scope because i wanted to make it a CLI command so that it would be easier to run it anywhere on your machine.

```bash
npm install -g aoctemplate
```

```bash
yarn add --global aoctemplate
```

## Usage
<hr>

So there are two commands one for template generation and other for running that template after you write your solution ofcourse.

```bash
aoc <FOLDER_NAME>
aocrun <SEPARATOR_CHARACTER>
```

### Examples

The command `aoc` will generate two files `input.txt` for pasting your puzzle input and `solution.js` where you will write your puzzle solution.

```bash
aoc 'day_six'
```

The command `aocrun` will parse and run on the inputs of `input.txt` file with the character separator which you will provide and will return the solution of your solution function from `solution.js` file.
```bash
aocrun '\n'
```
<br>

## Contributing
<hr>

### See [CONTRIBUTING.md](CONTRIBUTING.md).
<br>

## Bugs and Issues
<hr>

If you encounter any bugs or issues, feel free
to [open an issue at github](https://github.com/devdutt6/[aoctemplate](https://github.com/devdutt6/aoctemplate.git)/issues) or email me to
<devduttchudasama1339@gmail.com>. I also always like to hear from you, if you’re using my code.