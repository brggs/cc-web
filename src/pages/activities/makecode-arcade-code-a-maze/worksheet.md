---
layout: ../../../layouts/PrintableLayout.astro
title: Mythical Hero's Maze - Work Sheet
description: 'Instructions for extending the MakeCode Arcade maze game beyond the first simple tutorial.'
sectionsPerPage: true
leaderIntro: true
---

# Mythical Heroes — Challenge Work Sheets

**For whoever is running the session.**  These work sheets go with the [Mythical Hero's Maze activity](/activities/makecode-arcade-code-a-maze), and pick up where the [Maze tutorial](https://arcade.makecode.com/tutorials/maze) leaves off.

Printing this page gives you one sheet per challenge to hand out - this section is left off the print out.

- Challenges 1, 2 and 3 make a good session.  4 and 5 are there for anyone who gets through those.
- Challenge 5 adds a second level, and is the only one that runs to two sheets.  It works well held back until someone asks for it.
- Before they start, get everyone to click the **Save** button at the bottom of the MakeCode screen, so a closed tab doesn't cost them their maze.
- The challenges can be done in any order, but 4 and 5 both build on code from earlier ones.

---

## Challenge 1 — Collect the Relics ⭐

*Scatter treasure through the maze for your hero to find.*

**Make the relics**

1. From **Sprites**, drag a `set mySprite to sprite of kind Player` block into `on start`. Put it **underneath** the `set tilemap to` block.
2. Click the dropdown that says **mySprite** and choose **New variable…** Call it `relic`.
3. Click the little grey square in the block to open the drawing editor. Draw your relic — a golden apple, a coin, a jewel. Or click **Gallery** to pick a ready-made one.
4. Click the dropdown that says **Player** and change it to **Food**.
5. From **Scene**, drag `place relic on top of random tile` underneath. Choose your floor tile from the dropdown so relics land on the floor, not inside walls.
6. From **Loops**, drag a `repeat 4 times` block into `on start` and drop **both** of your new blocks inside it. Now you get four relics instead of one!

**Make them collectable**

7. From **Sprites**, drag out `on sprite of kind Player overlaps otherSprite of kind Player`. This is a new block that sits on its own — don't put it inside `on start`.
8. Change the **second** dropdown from **Player** to **Food**.
9. Inside it, put:
   - `destroy otherSprite` (from **Sprites**)
   - `change score by 1` (from **Info**)

**Test it!** Your score appears in the top corner as soon as you grab your first relic.

> 💡 **Running out of time?** Click the number in the `start countdown` block in `on start` and make it bigger.

---

## Challenge 2 — Sound and Music ⭐

*Games feel twice as good with sound.*

1. Click **Music** in the block menu.
2. Drag a `play ... until done` block out.
3. Click the picture inside it to choose or create a sound. The dropdown next to it lets you pick a **sound effect**, a **melody**, or a **song**.

Now put your sounds where you want them:

- **Background music:** put a music block at the top of `on start`. Change **until done** to **in background** — otherwise the game waits for the music to finish before it starts!
- **Grabbing a relic:** put a short sound inside your `overlaps ... Food` block from Challenge 1.
- **Winning:** put a triumphant sound just above the `game over WIN` block.

---

## Challenge 3 — Monsters and Lives ⭐⭐

*Every hero needs something to run away from.*

**Give your hero lives**

1. From **Info**, drag `set life to 3` into `on start`.

**Add the monsters**

2. Make monster sprites exactly the same way you made the relics in Challenge 1 — but this time:
   - name the variable `monster`
   - set the kind to **Enemy**
   - draw something scary (a Gorgon, a serpent, a cyclops)
   - use `repeat 3 times`

**Make them dangerous**

3. From **Sprites**, drag out another `on sprite of kind Player overlaps otherSprite of kind Player`.
4. Change the **second** dropdown to **Enemy**.
5. Inside it, put:
   - `destroy otherSprite` (from **Sprites**)
   - `change life by -1` (from **Info**)

**Test it!** Hearts appear in the corner. When they run out, the game ends by itself.

> 💡 Make your monsters look really different from your relics, or players won't know what to avoid.

---

## Challenge 4 — The Locked Gate ⭐⭐⭐

*The exit won't open until you've found the key. This one uses a variable — a box the computer keeps something in.*

**Make the variable**

1. Click **Variables**, then **Make a Variable…** Call it `hasKey`.
2. Drag `set hasKey to 0` into `on start`, near the top.
3. From **Logic**, drag a `false` block into the slot where the `0` is. It should now read `set hasKey to false`. This means: *we haven't found the key yet.*

**Make the key**

4. Make a key sprite the same way as before — variable named `key`, and draw a key. **Don't** use a repeat loop, you only want one!
5. In the kind dropdown, choose **Add a new kind…** and name it `Key`. (If it were Food, your relic code would eat it.)
6. Add `place key on top of random tile` underneath.

**Pick it up**

7. Drag out another `on sprite of kind Player overlaps otherSprite of kind Player` and set the second dropdown to **Key**.
8. Inside it, put:
   - `destroy otherSprite`
   - `set hasKey to true` (grab the `true` block from **Logic**)
   - a sound, if you like

**Lock the gate**

9. Find your original block that says `on sprite of kind Player overlaps ... at location` with `game over WIN` inside it.
10. From **Logic**, drag an `if ... then` block into it, and move `game over WIN` **inside** the `if`.
11. From **Variables**, drag `hasKey` into the diamond-shaped slot in the `if`.

It should now read: **if `hasKey` then `game over WIN`**.

**Test it!** Run to the exit without the key — nothing happens. Grab the key first, and you win.

> 💡 **Optional:** click the **+** at the bottom of the `if` block to add an `else`, and put a `splash "The gate is locked!"` block (from **Game**) inside it, so players know why nothing happened.

---

## Challenge 5: Level Two ⭐⭐⭐⭐
 
*Reaching the exit doesn't win the game any more — it takes your hero deeper into the labyrinth.*
 
---
 
### Step 1 — Draw a second maze
 
1. Click the **Assets** tab at the top of the screen.
2. Click **+ New Asset**, then choose **Tilemap**.
3. Name it `level2`.
4. Draw your second maze. Make it harder than the first!
   - Click the **wall** icon above the Gallery, then paint over the tiles your hero shouldn't be able to walk through.
   - **Important:** use the same exit tile you used in level 1, or the code won't know when the player has reached the end.
5. Click **Done**.
> Another way in: click the grey map picture inside your `set tilemap to` block, then look for **My Tilemaps** and create a new one there.
 
---
 
### Step 2 — Keep track of which level you're on
 
1. Make a new variable called `level`.
2. In `on start`, add `set level to 1`.
---
 
### Step 3 — Change the ending
 
Find the block that says `on sprite of kind Player overlaps ... at location`.
 
Rebuild what's inside it so it looks like this:
 
```
if  level = 1  then
    set level to 2
    set tilemap to level2
    place mySprite on top of random [floor tile]
    start countdown 30 (s)
else
    game over WIN
```
 
How to build it:
 
1. From **Logic**, drag an `if ... then` block in. Click the **+** at the bottom to add an `else`.
2. From **Logic**, drag a `0 = 0` comparison block into the diamond slot. Put `level` on the left and type `1` on the right.
3. Move your existing `game over WIN` block down into the `else` part.
4. Fill the `then` part with the four blocks above. `set tilemap to` is in **Scene** — click its grey picture and choose `level2`.
---
 
### Step 4 — Test it
 
Reach the exit. The screen should switch to your new maze with your hero back at the start, and the timer should reset. Reach the exit a second time and you win.
 
---
 
### Watch out for this
 
Any relics, monsters or keys you added in earlier challenges are **still there** when level 2 loads — floating in strange places, possibly inside walls.
 
To fix it, look in **Sprites** for a `destroy all sprites of kind ...` block. Add one for each kind you used at the start of your level-2 code, then place fresh ones afterwards using the same `repeat` blocks as before.
 
---
 
### Going further
 
- Add a `level3` tilemap and another `else if`.
- Give each level a different countdown time — shorter each time.
- Show the level number on screen with `set score to level`, or use a `splash` block to announce "Level 2!" before the maze appears.

---

Back to the [Mythical Hero's Maze activity](/activities/makecode-arcade-code-a-maze).
