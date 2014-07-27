# Symfony 2 app generator

Yeoman generator that scaffolds out a Symfony 2 PHP web app.

## Features

* Symfony 2.5 Standard Edition
* Bootstrap 3
* Gulp or Grunt tasks
* LESS

For more information on what `generator-symfony` can do for you, take a look at the [Grunt tasks](https://github.com/evolution7/generator-symfony/blob/master/app/templates/_package.json) used in our `package.json`.

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

- Run: `yo symfony2`
- Run `gulp watch` for development, point your browser at app_dev.php
- Run `gulp build` for production deployment/access via app.php

## Options

* `--skip-install`

  Skips the automatic execution of `bower`, `npm` and `composer` after scaffolding has finished.
