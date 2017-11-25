## ReactSPA
### Documentation
---
#### Requirements
- Node
- npm

#### Stack
- Node
- Webpack
- ES6 (Babel)
- React
- React Router
- Redux / React Router Redux / Redux Form
- PostCSS + Sass
- Material UI

#### Initialization
```bash
npm i && npm run dev
```

#### Build to production|stage
```bash
npm run build:production|stage
```

#### Deploy to Stage
##### Requirements
- Heroku CLI
- Add your heroku user to project

##### In project folder:
```bash
heroku login
heroku plugins:install heroku-builds
heroku git:remote -a <APP NAME>
npm run deploy:stage
```
