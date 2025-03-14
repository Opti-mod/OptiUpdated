# Opti
An optimized Discord mobile experience. A fork of [Bunny](https://github.com/vendetta-mod/Vendetta/).

## Installing

### Android

- **Root** with Xposed - [BunnyXposed](https://github.com/pyoncord/BunnyXposed/releases/latest)
- **Non-root** - [BunnyManager](https://github.com/pyoncord/BunnyManager/releases/latest)

### iOS
- [**BunnyTweak**](https://github.com/pyoncord/BunnyTweak) - Get prebuilt rootful and rootless `.deb` files or the prepatched `.ipa `

- **Enmity Sideloading** - Sideload with the following URL:  https://raw.githubusercontent.com/Opti-mod/OptiUpdated/refs/heads/main/dist/bunny.js 

## Building
1. Install an Opti loader with loader config support (any mentioned in the [Installing](#installing) section).
1. Go to Settings > General and enable Developer Settings.
1. Clone the repo:
    ```
    git clone https://github.com/Opti-mod/Opti
    ```
1. Install dependencies (if pnpm is not installed already, run ```npm i pnpm --global``` first.):
    ```
    pnpm i
    ```
1. Build Opti's code:
    ```
    pnpm build
    ```
1. In the newly created `dist` directory, run a HTTP server. I recommend [http-server](https://www.npmjs.com/package/http-server).
1. Go to Settings > Developer enabled earlier. Enable `Load from custom url` and input the IP address and port of the server (e.g. `http://192.168.1.236:4040/bunny.js`) in the new input box labelled `Bunny URL`.
1. Restart Discord. Upon reload, you should notice that your device will download Bunny's bundled code from your server, rather than GitHub.
1. Make your changes, rebuild, reload, go wild!

Alternatively, you can directly *serve* the bundled code by running `pnpm serve`. `bunny.js` will be served on your local address under the port 4040. You will then insert `http://<local ip address>:4040/bunny.js` as a custom url and reload. Whenever you restart your mobile client, the script will rebuild the bundle as your client fetches it.
