# Symfony 2 + Gulp + Bootstrap

Yeoman generator that scaffolds out a Symfony 2 web app.

## Features

* Symfony 2.5 Standard Edition
* Bootstrap 3
* Gulp or Grunt tasks
* LESS watch/build support
* Command aliases for schema updates and database dumps
* Automatic database and bundle generation
* Out-of-the-box support for [Doctrine Extenions](https://github.com/Atlantic18/DoctrineExtensions)

## Prerequisites

Things you probably need:

- npm
- php
- php-intl
- composer
- compass
- vagrant
- VirtualBox

## Getting Started

- Clone repo and run `npm link`
- In a new folder, run `yo symfony2`
- Run `gulp watch` for development, point your browser at app_dev.php
- Run `gulp build` for production deployment/access via app.php

Your answer to the "app name" prompt will determine the following:

- Default database name
- The namespace of the generated bundle; entering "MyApp" will create a bundle named "MainBundle" in the "MyApp" namespace (MyApp/MainBundle).

## Options

* `--skip-install`

  Skips the automatic execution of `bower`, `npm` and `composer` after scaffolding has finished.
