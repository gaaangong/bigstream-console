# Bigstream-console

## Running Application

Prerequisite

```
$ npm install && bower install
```

and run this to open application (This will create run of Bigstream-console application on electron)

```
$ npm start
```

## Building Application

This packaging will be create built file in ./release-builds

```
# packaging for Windows
$ npm run package-win

# packaging for Mac OS X
$ npm run package-mac

# packaging for Linux (Ubuntu)
$ npm run package-linux
```

## Create Installer

This will be create installer file in ./release-built-installers

```
# For Windows (exe file installer)
$ npm run create-installer-win

# For Mac OS X (dmg file)
$ npm run create-installer-mac
```