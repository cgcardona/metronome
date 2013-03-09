/*jshint devel:true */
/*global Ember */
/*global _ */
/*global setInterval */
window.onload = function(){
  'use strict';

  /*
   * MetronomeController
   * This object will receive input from the user and query the model or direct
   * the view to change depending on the user's action
   *
   *
   * bool constructor()
   */
  function MetronomeController(){
  }

  /*
   * MetronomeView
   *
   *
   * bool constructor()
   */
  function MetronomeView(){
  }

  /*
   * MetronomeModel
   *
   *
   * bool constructor()
   */
  function MetronomeModel(){
  }

  function Metronome(settings){
    this.beatsPerMinute = settings.beatsPerMinute || 128;
    this.beatsPerMeasure = settings.beatsPerMeasure || 4;
    this.beatUnit = settings.beatUnit || 4;
    this.currentMeasure = settings.currentMeasure || 1;
    this.currentBeat = settings.currentBeat || 1;
    this.beatUnitLength = _.isNumber(settings.beatsPerMinute) ? this.setBeatUnitLength() : 60 / 128;
    this.ui = settings.ui || false;
    this.loopState = false;
  }

  Metronome.prototype.setBeatUnitLength = function(){
    return 60 / this.beatsPerMinute;
  };

  Metronome.prototype.play = function(){
    var context = this;
    var beatsPerMeasureRange = _.range(this.beatsPerMeasure);
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
    if(this.ui === true)
      $('#status').text('Inactive');
    $.each(this.timeouts, function (x, id) {
      clearTimeout(id);
    });
  };

  Metronome.prototype.loop = function(beatsPerMeasureRange){
    if(this.ui === true){
      $('#currentMeasure').text(this.currentMeasure);
      $('#currentBeat').text(this.currentBeat);
      $('#status').text('Active');
    }

    if(this.currentBeat >= beatsPerMeasureRange.length)
    {
      this.currentBeat = 1;
      this.currentMeasure = this.currentMeasure + 1;
    }
    else
      this.currentBeat = this.currentBeat + 1;
  };

  Metronome.prototype.currentState = function(){
    var context = this;
    var returnObj = {};
    $.each(Object.keys(this), function(x, el){
      returnObj[el] = context[el];
    });
    return returnObj;
  };

  var met = new Metronome({
    beatsPerMinute : 128,
    ui             : true
  });

  $('#start').click(function(){
    met.play();
  });

  $('#stop').click(function(){
    console.log(met.currentState());
    met.stop();
  });

};
