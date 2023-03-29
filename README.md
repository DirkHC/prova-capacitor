# NDBX Sample Application

I will show you how I created the given example application.

🕹 Play around in the [preview][preview] to get a feeling what this is all about.

---

## 1. Create your base project with Angular CLI

```bash
ng new ndbx-sample-project
```

## 2. New NPM registry for @allianz packages

Use a local .npmrc file or run the following command to use a different npm registry for the involved `@allianz` packages. Those packages are not hosted on the public npm.

Via a local `.npmrc` file (like in this project)

```
@allianz:registry=https://nexus-gcj.apps.crp-gate.ec1.aws.aztec.azcs.io/repository/npm-public/
```

To change it for all of your project:

```bash
# use those values in the following prompt
# username: gdf-npm-read
# password: gdf
# email: gdf-npm-read@allianz.com
npm adduser --registry=https://nexus-gcj.apps.crp-gate.ec1.aws.aztec.azcs.io/repository/npm-public/ --scope=@allianz --always-auth
```

See [ngx-ndbx Readme](https://github.developer.allianz.io/gdf/ngx-ndbx#-preparation) for more details on this topic.

## 3. Install the necessary dependencies.

The `ng add` schematics below will install the library, necessary styles and peer-dependencies for your project.

```shell
ng add @allianz/ngx-ndbx
```

## 4. Enable NDBX Modules

```
<!-- app.module.ts -->
import { NxButtonModule } from '@allianz/ngx-ndbx';

@NgModule({
  imports: [
    BrowserModule,
    NxButtonModule
  ]
})
```

## 5. Use the components for a win

```html
<!-- app.component.html -->
<button nxButton>NDBX Button</button>
```

This example contains more than a button you will be comfortable by now when reading the source code of this example.

** Important: ** Because the ADP team removed Github Enterprise - Pages support we are not able to provide a preview of this application. You can easily download the project and then follow the steps below to run the project.

```shell
npm ci
```

```shell
npm run start
```

Navigate to `localhost:4200` on your browser to preview the application.
