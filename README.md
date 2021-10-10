
Сборка сделанная на вебпаке для работы с 2D графикой и HTML документами. Специально для занятий на Web Developer.
## Особенности сборки
* PIXI.Js
* animejs
* используется [PIXI](https://pixijs.io/) для поддержки современного JavaScript (ES6) в браузерах
* выбираете любой препроцессор SASS/SCSS/LESS
* ваш CSS и JS оптимизируется и минифицируется
* установлен пакет webpack-dev-server - вам не потребуется постоянно перезагружать браузер
* поддержка [TypeScript](https://www.typescriptlang.org/)

## Файловая структура

```
webpack-frontend-template
├── dist
├── src
│   ├── assets
│       ├── fonts
│       ├── images
|       ├── styles
|       └── content
│   ├── styles
│   ├── index.html
│   └── index.js
├── webpack.config.js
├── package.json
├── .gitignore
├── .eslintrc
└── .gitignore
```

> В зависимости от фреймворка, вы можете переделать организацию файлов в папке src т.к. обычно она отличается


## Команды

* ```npm run build``` - собираем production
* ```npm start``` - слежение за файлами и открываем в браузере

## Установка

Установим все необходимые пакеты из package.json

```bash
npm install
```

Запускаем

```bash
npm start
```

