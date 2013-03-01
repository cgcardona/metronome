/*global Ember:false */
/*global console:false */
window.onload = function(){
  'use strict';

  var Metronome = Ember.Object.extend({
    beatsPerMinute    : 128,
    beatsPerMeasure   : 4,
    beatUnit          : 4,
    currentMeasure    : 1,
    currentBeat       : 1,
    beatUnitLength    : undefined,
    init              : function()
    {
      this.beatUnitLength = this.setBeatUnitLength();
    },
    setBeatUnitLength : function()
    {
       return 60 / this.beatsPerMinute;
    }
  });

  var metronome = Metronome.create({
    beatsPerMinute : 255,
    beatsPerMeasure : 2,
    beatUnit        : 4
  });

  console.log(metronome);
};
