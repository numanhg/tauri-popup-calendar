# pop-up calendar

- a react-calendar package wrapped in tauri app

- clone the repo

```sh  
git clone https://github.com/numanhg/tauri-popup-calendar.git
```

- prerequisities

```sh 
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev

```

- to multiple builds (.rpm, .deb, .appimage) in `src-tauri/tauri.conf.json` set `active` property to `true` and put `targets` based on your needs.   

- build the app
```sh
cd tauri-popup-calendar
pnpm install
pnpm run tauri build
```


- move it to the path
```
cp src-tauri/target/release/calendar $HOME/.local/bin/calendar
```

