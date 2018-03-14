# teresius.co.uk Overview

* This is the code for my personal website. It currently consists of one brochure page.
* The goal of this codebase was to have a convenient set-up for expanding it into a larger website while keeping it minimalistic.
* Using Webpack to compile and concatenate Javascript and SASS files into bundles. Babel transforms ES6 into browser readable Javascript.
* Using jQuery 3 and Bootstrap 4.
* This repository can be copied and used by anyone looking for a simple one-page website set-up.

# Prerequisites:
* Node & NPM

# Set up teresius:
1. Clone teresius repository.
2. Run `npm install` to install all the required dependencies.
3. Run `npm start` to compile the Javascript and SASS.
4. Edit the Javascript and SASS files in the `src` folder and the HTML inside the `public` folder. Launch `index.html` in the browser when ready.

# Notes
* Please note that there is *no need* for a website this size to run Babel, have SASS compilers, other NPM dependencies etc. However, for the purpose of expanding it I wanted to set everything up initially - doing this will make it easier to develop and debug in the future.
