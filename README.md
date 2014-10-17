JavaScript Audio / MIDI
============================

Code from talk given at Wellington.js meetup on 16 October 2014

```bash
git clone https://github.com/mmckegg/wellington-js-loop-drop-talk.git
cd wellington-js-loop-drop-talk
npm install
npm start
```

Navigate to http://localhost:1624

/runner.js is the main node file (node midi examples)
/entry.js is the browserified javascript running in browser (containing Web Audio examples and slides)
/start.als is the Ableton Live project file used for the first example
/midi-dump.js generates the /song.json file by extracting notes from /song.midi

Changing either file will reload the browser / restart the node server.

See https://github.com/mmckegg/loop-drop-app for instructions on how to build and run the app.
