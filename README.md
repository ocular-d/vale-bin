## About

`vale-bin` an NPM wrapper for [Vale](https://github.com/errata-ai/vale "Link to Vale on GitHub").

## Requirements

Please check the [Vale configuration docs](https://vale.sh/docs/topics/config/ "Link to Vale config docs").

## Install

```shell
npm install --save @ocular-d/vale-bin
```

## Usage

Check the version:

```shell
./node_modules/.bin/vale -h
vale - A command-line linter for prose.

Usage:	vale [options] [input...]
	vale myfile.md myfile1.md mydir1
	vale --output=JSON [input...]
```

Example of running `vale` against the `docs` directory:

```shell
./node_modules/.bin/vale docs
```

## Contributing

Feel free to contribute, your help is very welcome:

- Give a GitHub ⭐ if you like it.
- Create an [issue](https://github.com/ocular-d/vale-bin/issues "Link to issue tracker on GitHub") to make a feature request, report a bug or share an idea.

## License

The content in this repository is licensed under the [MIT License](./LICENSE "Link to MIT license").

## Credits

- [David Offerman](https://github.com/davidofferman "Link to GitHub of David"), code is based on [hugo-bin](https://github.com/davidofferman/hugo-bin "Link to hugo-bin on GitHub")
- [Onna](https://onna.com "Link to Onna")
- [Anh Le](https://github.com/Haizzz "Link to Anh Le on GitHub")
- [Andrée Hansson](https://github.com/peol "Link to Andrée Hansson on GitHub")
- [ Maia Teegarden ](https://github.com/padmaia "Link to Maia Teegarden on GitHub")
