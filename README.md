# Retina images generation demo

## View result [online](https://retyui.github.io/modern-generation-icon-for-retina-display/index.html)

[![View result online](https://pp.userapi.com/c638127/v638127614/4b3e3/WFp7dcnVt5c.jpg)](https://retyui.github.io/modern-generation-icon-for-retina-display/index.html)

## How it works

1. Generate .webp images. [view code 👀](https://github.com/retyui/demo-modern-images-usage-css/blob/master/gulpfile.js#L18-L24)
2. [`webpcss`](https://github.com/lexich/webpcss) add links to WebP images for browsers that support it. [view code 👀](https://github.com/retyui/demo-modern-images-usage-css/blob/master/gulpfile.js#L31)
3. [`postcss-image-set-generator`](https://github.com/retyui/postcss-image-set-generator) generate miniatures for all `image-set(<one_image_set_options>)`. [view code 👀](https://github.com/retyui/demo-modern-images-usage-css/blob/master/gulpfile.js#L32-L38)
4. [`postcss-image-set-polyfill`](https://github.com/SuperOl3g/postcss-image-set-polyfill) convert all `image-set()` to `@media(min-resolution: XXXdpi){/*...*/}`. [view code 👀](https://github.com/retyui/demo-modern-images-usage-css/blob/master/gulpfile.js#L39)

5. [`autoprefixer`](https://github.com/postcss/autoprefixer) fixed `@media` rules. [view code 👀](https://github.com/retyui/demo-modern-images-usage-css/blob/master/gulpfile.js#L43)
6. [`css-mqpacker`](https://github.com/hail2u/node-css-mqpacker) groups duplicated media rules. [view code 👀](https://github.com/retyui/demo-modern-images-usage-css/blob/master/gulpfile.js#L44)
7. [`csso`](https://github.com/css/csso) minify css code. [view code 👀](https://github.com/retyui/demo-modern-images-usage-css/blob/master/gulpfile.js#L45)


## ⚠️ The order of postcss plugins 
|№| plugin | required |
|-|--------|----------|
|1| webpcss |  |
|2| postcss-image-set-generator | ✔ |
|3| postcss-image-set-polyfill | ✔ |
|4| autoprefixer | ✔ |
|5| css-mqpacker | ✔ |
|6| postcss-csso |  |

## Install & use
Clone this repo and install npm packages:
```bash
yarn
npm i
```
Run build:
```bash
yarn run build
npm run build
```
