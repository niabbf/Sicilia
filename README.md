# Sicilia
## Frontend
### Prepare
1. Install and configure:
- Node & NPM
- Java
- Android SDK
- Cordova
2. Clone code to local path and enter `Sicilia/frontend`
3. Install npm packages by `npm install`
4. Create directory `www`
5. Install cordova Android platform by `cordova platform add android`

### Build and Run on your device
1. Connect your device to computer, use `adb devices` to check it
2. Build javascript code by `npm run build`
3. Build apk and install it to your device by `cordova run android`

### Debug by Chrome
1. Open terminal and execute `npm run dev` in `Sicilia/frontend`
2. After building, open Chrome and enter URL `localhost:8080`
3. Then you can use Chrome development tools by `F12` to debug

### Project Structure
- src/api: APIs called by pages
- src/components: store all components & pages
- src/router: manage page routers, see more in [Vue Router](https://router.vuejs.org/zh/)
- src/store: manage App datas & status, see more in [Vuex](https://vuex.vuejs.org/zh/installation.html)