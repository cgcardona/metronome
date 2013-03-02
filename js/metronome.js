/*global Ember:false */
/*global console:false */
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

      var beatsPerMeasureRange = _.range(this.beatsPerMeasure);
      console.log(beatsPerMeasureRange);
      setInterval(function(){
        console.log('shmisssss');
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
    },
    paintPixels       : function()
    {
      console.log('painting pixels');
    }
  });

  Metronome.IndexController = Ember.Controller.extend({
    beatsPerMinute : '245456'
  });

  var metronome = Metronome.metronome.create({});

  metronome.play();
};
