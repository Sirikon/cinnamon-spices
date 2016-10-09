# Cinnamon Spices Website #

Repository for static content, implementing the new Cinnamon Spices
website design.

## Requirements ##

 - node
 - npm
 - gulp CLI (`npm install -g gulp`)

The project has no dependency on any editor, use the one you feel
comfortable with.

## Setup Dev Environment ##

After making a clone of this repository, run on command line:
```bash
npm install
```
This will download the required dependencies

To start working just run this on terminal:
```bash
gulp
```
This will start watching the source files, applying transformations
when they change and initialize a web server on `localhost:8080`.

Then start working on `src` folder, all resulting files will be in `dist`
folder.

__DON'T__ edit manually the `dist` folder, it's fully auto-generated and
any manual change will be lost.

## Releasing ##

There's already a gulp task for this, just run:
```bash
gulp release
```

## License ##
```
MIT License

Copyright (c) 2016 Carlos Fernández

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```