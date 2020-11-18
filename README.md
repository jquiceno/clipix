# Clipix
Clipix, nice image editor for the terminal created in Nodejs.
This package using sharp for images process and tinify for compress.

## Install

```sh
npm install clipix -g
```

# Resources

- commander: https://www.npmjs.com/package/commander#installation
- Sharp docs: https://sharp.pixelplumbing.com/
- Tinify docs: https://tinypng.com/developers/reference/nodejs
- log-symbols: https://www.npmjs.com/package/log-symbols
- chalk: https://www.npmjs.com/package/chalk
- configstore: https://www.npmjs.com/package/configstore
- inquirer: https://www.npmjs.com/package/inquirer
- got: https://www.npmjs.com/package/got
- dummy: https://dummyimage.com

# TODO

## Get image info

### Example

```sh
clipix info ./image.jpg
```

## Generate dummy image

### Example

```sh
clipix dummy -bg 0000 -c 0011ff -w 700 -h 500 -f png
```

## Transform images

### Example

```sh
clipix transform rotate ./image.jpg
```

## Compress images
- https://tinypng.com/developers

### Example

```sh
clipix compress ./image.jpg
```

## Rezise images

### Example

```sh
clipix resize -w 300 -h 300 ./image.jpg
```

## Convert format images
Convert images to diferent format

### Example

```sh
clipix convert png ./image.jpg
```

## Download image
Download image from remote url

### Example

```sh
clipix download https://remoteimage/image.jpg
```