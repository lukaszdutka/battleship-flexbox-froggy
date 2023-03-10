## Live demo link: [Battleship Flexbox](http://lukaszdutka.github.io/battleship-flexbox-froggy)

# Battleship Flexbox v0.2

Game designed to learn flexbox. Heavily inspired on [Flexbox Froggy](https://flexboxfroggy.com/). Basically Flexbox
Froggy ripoff.

**I don't want any credit**, I created this project solely for learning purposes.

Project is not finished, some levels are not implemented, there are plenty of QoL improvements in the plan.
# Used Technologies

React, JS

# Gifs

Solving level 5. As you can see the board reacts in the real time.
![](battleships_lvl5.gif)

More complicated one.
![](battleship_lvl12.gif)

# How to run

Clone the repository and run `npm start` command.

# todo
- [x] ~~working demo~~
- [ ] FIX bug "when deleting your answer, some dynamic css is still there until value of css is cleared"
- [x] FIX levels when you need to modify css of `.targets` instead of `.sea` 
- [x] FIX levels when it requires modified starting css of `.sea`
- [x] Fully translate froggy texts to battleship-themed
  - [ ] Rewrite instructions not just replace "frog" with "target" and "lilypads" with "ships"
- [ ] add some QoL upgrades
  - [ ] level chooser, not only previous/next
  - [ ] "next" button after solving level correctly
- [ ] footer with links to github etc.
- [ ] different languages
- [ ] credits to Flexbox Froggy in code 
- [x] Now the answer textarea is cleared between levels. 
  - [ ] Add retaining previously filled answers, even between sessions. 
- [ ] refactor "levels.js" to *.jsx 