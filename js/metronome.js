/*jshint devel:true */
/*global Ember */
/*global _ */
/*global setInterval */
window.onload = function(){
  'use strict';

  var MetronomeApplication = Ember.Application.create();

  MetronomeApplication.Metronome = Ember.Object.extend({
    beatsPerMinute    : 128,
    beatsPerMeasure   : 4,
    beatUnit          : 4,
    currentMeasure    : 1,
    currentBeat       : 1,
    beatUnitLength    : 60 / 128,
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
      var beatsPerMeasureRange = _.range(this.beatsPerMeasure);
      var context = this;
      setInterval(function(){
        console.log('current beat: ' + context.currentBeat);
        console.log('current measure: ' + context.currentMeasure);
        if(context.currentBeat >= beatsPerMeasureRange.length)
        {
          context.currentBeat = 1;
          context.currentMeasure = context.currentMeasure + 1;
        }
        else
        {
          context.currentBeat = context.currentBeat + 1;
        }


      }, this.beatUnitLength * 1000);

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

  var metronome = MetronomeApplication.Metronome.create({
    beatsPerMinute : 60
  });
  metronome.play();

  MetronomeApplication.ApplicationController = Ember.Controller.extend({
    beatsPerMinute : metronome.beatsPerMinute,
    currentMeasure : metronome.currentMeasure,
    currentBeat    : metronome.currentBeat
  });
};
