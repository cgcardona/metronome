/*jshint devel:true */
/*global Ember */
/*global _ */
/*global setInterval */
window.onload = function(){
  'use strict';

  function Metronome(settings){
    this.beatsPerMinute = settings.beatsPerMinute || 128;
    this.beatsPerMeasure = settings.beatsPerMeasure || 4;
    this.beatUnit = settings.beatUnit || 4;
    this.currentMeasure = settings.currentMeasure || 1;
    this.currentBeat = settings.currentBeat || 1;
    this.beatUnitLength = _.isNumber(settings.beatsPerMinute) ? this.setBeatUnitLength() : 60 / 128;
    this.loopState = false;
  }

  Metronome.prototype.setBeatUnitLength = function(){
    return 60 / this.beatsPerMinute;
  };

  Metronome.prototype.play = function(){
    var beatsPerMeasureRange = _.range(this.beatsPerMeasure);
    var context = this;
    this.loopState = true;
    this.timeouts = [];
    this.timeouts.push(setInterval(function(){
      if(context.loopState === true){
        context.loop(beatsPerMeasureRange);
      }
    }, this.beatUnitLength * 1000));
  };

  Metronome.prototype.stop = function(){
    this.loopState = false;
    $('#status').text('Inactive');
    $.each(this.timeouts, function (x, id) {
      clearTimeout(id);
    });
  };

  Metronome.prototype.loop = function(beatsPerMeasureRange){
    $('#currentMeasure').text(this.currentMeasure);
    $('#currentBeat').text(this.currentBeat);
    $('#status').text('Active');

    if(this.currentBeat >= beatsPerMeasureRange.length)
    {
      this.currentBeat = 1;
      this.currentMeasure = this.currentMeasure + 1;
    }
    else
      this.currentBeat = this.currentBeat + 1;
  };

  var met = new Metronome({
    beatsPerMinute : 60
  });

  $('#start').click(function(){
    met.play();
  });

  $('#stop').click(function(){
    met.stop();
  });
};
