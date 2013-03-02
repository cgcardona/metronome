/*jshint devel:true */
/*global Ember */
/*global _ */
/*global setInterval */
window.onload = function(){
  'use strict';

  var Metronome = Ember.Application.create();

  Metronome.metronome = Ember.Object.extend({
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
    },
    play              : function()
    {
      console.log('playing');
      
      Metronome.ApplicationController

      var beatsPerMeasureRange = _.range(this.beatsPerMeasure);

      if(this.currentBeat >= beatsPerMeasureRange[beatsPerMeasureRange - 1])
      console.log(beatsPerMeasureRange);
      setInterval(function(){
        console.log('set interval is looping');
      //}, this.beatUnitLength);
      }, 1000);
    },
    pause             : function()
    {
      console.log('paused');
    },
    stop              : function()
    {
      console.log('stopped');
    },
    reset             : function()
    {
      console.log('reset');
    }
  });

  var metronome = Metronome.metronome.create({});
  metronome.play();

  Metronome.ApplicationController = Ember.Controller.extend({
    beatsPerMinute : metronome.beatsPerMinute,
    currentMeasure : metronome.currentMeasure,
    currentBeat    : metronome.currentBeat
  });
};
