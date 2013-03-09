# metronome

## Summary

A metronome for the Audiofile Framework

## Technical Specification

### Functionality

This is to serve as the core time keeping component for the AudioFile Framework.
It's also to serve as a standalone component. As such it should have a visual as
well as programatic interface.

#### Visual Interface

##### Actions

The metronome should have the following actions exposed via buttons (except where noted):

1. Start
2. Stop
3. Pause
4. Reset
5. Increase/Decrease BPM (slider)
6. Increase/Decrease Volume (slider)

## MVC

As a learning excercise I'm modeling the MVC after the [SmallTalk-80 Pattern](http://st-www.cs.illinois.edu/users/smarch/st-docs/mvc.html)

### Meaning of Terms

From the docs:

> The **view** manages the graphical and/or textual output to the portion of the
> bitmapped display that is allocated to its application. 

> The **controller** interprets the mouse and keyboard inputs from the user, commanding the model
> and/or the view to change as appropriate. 

> Finally, the **model** manages the behavior and data of the application domain, responds to requests for
> information about its state (usually from the view), and responds to
> instructions to change state (usually from the controller).

## More info

* [Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)
* [Time signature (Wikipedia)](http://en.wikipedia.org/wiki/Time_signature)
