window.onload = function(){
  'use strict';

  var Metronome = Ember.Object.extend({
    beatsPerMinute  : 128,
    beatsPerMeasure : 4,
    beatUnit        : 4
  });

  var metronome1 = Metronome.create();

  var metronome2 = Metronome.create({
    beatsPerMinute : 255,
    beatsPerMeasure : 2,
    beatUnit        : 4
  });
  console.log(metronome1, metronome2);
};

/*
More info:
[Time Signatures](http://en.wikipedia.org/wiki/Time_signature)
 */
