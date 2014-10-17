JavaScript Audio / MIDI
============================

Code/slides from talk given at the [October Wellington.js meetup](http://www.meetup.com/WellingtonJS/events/210914402/)

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

See https://github.com/mmckegg/loop-drop-app for instructions on how to build and run the app.
