---
title: 'Code and Craft Puzzle Robots'
pubDate: 2025-06-05
description: 'Step by step instructions for creating your own micro:bit puzzle robot!'
author: 'Andy Briggs'
image:
    url: './robots.jpg'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["tutorial", "mirco:bit"]
---

Craft your own electronic puzzle robot!  Follow the step by step instructions.

Making and code your own puzzle robot with the micro:bit and cardboard, coding it up to make a fun challenge for your friends and family!

![Code...](robots.jpg)

We’re going to design and make our robot out of cardboard, come up with a secret way to get it to reveal its password!

We'll code the robot give a clue, then it will be up to your freidns to work out what to do.

### What you’ll need

To build your robot, you will need:
* One [micro:bit](https://microbit.org)\*, with a battery pack and cable for programming
* Some sheets of coloured card (ideally a selection of colours)
* Some thicker cardboard (an old box will do)
* Glue
* A pencil, and coloured pens
* (Optional) Decorations for your robot such as stickers or googly eyes
* Scissors 
* Two split pins to attach the micro:bit to the card, or alternatively two small nuts and bolts 
* A computer to write the code and program the micro:bit (anything with a web browser and a USB port)

\* Don’t worry if you don’t have a micro:bit, many libraries in the UK have them available to borrow for free.  They are also inexpensive if you'd like to buy one of your own.

### Crafting the robot

Start with a piece of coloured card, roughly A5 size.  This is going to be the main colour of the robot, so pick the colour you’d like.

Next stick this to a piece of the thicker cardboard, to give it some strength.  We’ll be cutting our robot shape out of this later, so the edges don’t need to line up neatly.

PIC

Now use a pencil draw the outline of our robot.  There are all sorts of shapes you can choose from - you can give it a head and feet, or give it a big rounded body like R2D2.  Use your imagination and go for whatever you like!

PIC - examples of robot shapes

Now we need to decide where the micro:bit is going to go.  We need to leave enough space for it to be attached later on, so place in on the robot and draw a pencil line to mark the shape.  I’ve put the micro:bit in the middle of most of my robots, but it could also work well as the head!

PIC drawing round MB

You could now pencil in a few draft lines showing how you’d like to decorate the robot - where you might put stickers or cut out card to add features.

Now it’s time to cut the robot out, following the line you drew earlier.

And finally, add some decorations to the robots to bring them to life!  You can use a different coloured card to add on features, marker pens to add details and colours (metallic pens would be ideal!) or even add stickers or things like googly eyes!

PIC

Now our robots are ready, it’s time to add the micro:bit!

### Designing the puzzle
We’re going to program our micro:bit so that it reveals a password when someone performs a secret action.

The micro:bit has loads of features you can use for this.  For example, you could show the password when your micro:bit robot:
* Gets turned upside down
* Hears a loud noise (micro:bit version 2 needed for this!)
* Has its buttons, or the touch logo pressed
* Sees its somewhere dark
* Points North (it has a built in compass!)
* Gets shaken

Have a look at [the micro:bit website](https://microbit.org/get-started/features/overview/) for the full list of features, if you're not sure what to choose!

We'll look at how to program a few of these options in the next section.

### Writing the code

We’re going to use the [Microsoft MakeCode for micro:bit](https://makecode.microbit.org/) website to program our micro bits.  Open the site up, then click *New Project*.

To detect the shake, here's the code

![Code...](code-shake.png)

NOte that we show the sad face when the program starts, and switch to a happy face when the password's been found.

Click the drop down to detect other movement, like getting turned upside down, or detecting when the micro:bit is dropped!

Next let’s do a loud noise.  

![Code...](code-loud.png)


Are both of those too easy?  Let’s combine two inputs - upside down and pressing a button.

The code gets a little bit more complicated here.  We used the simple input blocks before - but these can only check for one thing at a time.  To add another check, we’ll need to add an If block inside:

![Code...](code-double.png)

### Giving a clue

We need to give people a clue for how to get the password, so let’s add some code to scroll it on the screen when we press the A button.  Here's the code to give the clue for our shake bot.

![Code...](clue-shake.png)

We have to put our sad face back again afterwards!

Try and come up with a clue that’s helpful, but not too easy!  (And, if the A button is part of your puzzle just choose a different button to show the hint)

Here are the clues for the loud noise...

![Code...](clue-loud.png)

And upside down + B button:

![Code...](clue-double.png)

Once you’ve got your clue, and your code is finished download the code to your micro:bit

Connect your micro:bit using youClick the *Download* buttonm

, and test that the puzzle and the clue are working.


### Attaching the micro bit

Now all we need to do is attach our micro:bit to the robot.

Hold your micro:bit up to the robot, in the spot you marked earlier and use a pencil to mark the two holes in the bottom corners.

PIC

Then take the microbit away, and poke the pencil through to make holes, with some blutack or something similar behind the robot so the pencil doesn’t damage anything.

PIC

Now put the micro:bit back into position, and secure it with two split pins (or nuts and bolts if you have any!)

PIC

Finally, poke a hole for the battery cable, and then tape that onto the back.

PIC

### Your robot is ready!

Congratulations, you’ve created your own puzzle robot!  Now it’s time to challenge your friends - can they figure out the clue and work out how to get the password?

Go back and try a different actin to get the password, or try these ideas for taking it to hte next level

* With 2 micro bits - require the secret action on both at the same time, and use radio to talk to each other!
* Chain steps together - one secret action unlocks the next!