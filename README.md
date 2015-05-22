![Loop Drop Logo](https://raw.githubusercontent.com/mmckegg/loop-drop-app/master/icon128.png)

# Destroying Electronic Music with JavaScript

My dark path into the depths of javascript based midi looping
and what eventually drove me to write my own electronic music performance software called [Loop Drop](https://loopjs.com).

- [github.com/mmckegg](https://github.com/mmckegg)
- [twitter.com/MattMcKegg](https://github.com/mmckegg)
- [soundcloud.com/destroy-with-science](soundcloud.com/destroy-with-science)

```bash
git clone https://github.com/mmckegg/wellington-js-loop-drop-talk.git
cd wellington-js-loop-drop-talk
npm install
npm start
```

Navigate to http://localhost:1624

- [runner.js](runner.js) is the main node file (node midi examples)
- [entry.js](entry.js) is the browserified javascript running in browser (containing Web Audio examples and slides)
- [start.als](start.als) is the Ableton Live project file used for the first example
- [midi-dump.js](midi-dump.js) generates the [song.json](song.json) file by extracting notes from [song.mid](song.mid)

Changing either file will reload the browser / restart the node server.

## Loop Drop

Find the repo at [github.com/mmckegg/loop-drop-app](https://github.com/mmckegg/loop-drop-app) or just [install the Chrome App](https://chrome.google.com/webstore/detail/loop-drop/lbihechibofgmjpfnegjblhoicglanbj).
