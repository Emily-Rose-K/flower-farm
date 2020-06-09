# flower-farm
Let's grow, grow, grow! You've built a backyard garden with five plots of dirt to plant 🌷flowers 🌷in, so get to planting, growing, and earning. Flowers produce ✨sparkles ✨ you can use to buy new types of flowers. You'll want to get as many types as you can to produce the most ✨sparkles ✨! 

## About
### goal state
The goal of this game is to grow your flowers and produce sparkles. Flowers need to be watered in order to grow and will only produce sparkles once fully grown. Players only have 3 minutes to grow as many flowers as they can to produce as many sparkles as they can. To start, players are given five seeds to plant in five plops of dirt. They will need to plant their seeds and water their flowers when they are thirsty to get them to grow . Once fully grown, flowers will start to produce a currency of sparkles. 

<!-- A player will "lose" the game if they run out of seeds/flowers. This is possible to do only if the player really wants to lose (ie., they choose to cut all their flowers and not to purchase new seeds in the shop.)  -->

A player will "lose" if they fail to produce the required sparkles in the current wave.  

## Installation

## Wireframes

![](/IntroScreen.png?raw=true "Starting Screen")

![](/GamePlay.png?raw=true "Game Play")

![](/EndGame.png?raw=true "The Round is Over")


## Tech Stack
HTML5, CSS, JS

## Art

## MVP Prototype
### Garden is set up
### 5 Seeds to start
### Able to plant a seed
### Able to water a seed/flower
### Watered seeds grow
### Fully grown & watered flowers produce sparkles
### Sparkle counter goes up 
### Timer counts down and ends game when it reaches 0


## Stretch Goals
### Add a stage of growth
### Add a second wave (reset the game without reseting sparkle count)
### Add a shop with one new type of flower


## Bugs

## Gameplay

### start screen
### the garden
### shop

## Planning & Game Design

### Nouns
All the things that are things in my thing:
- seeds (mvp)
  - seeds are not saplings and seeds are not flowers. seeds are an item that the farmer can hold. seeds can be planted in plops of dirt  by the farmer.
  - seed count
    - the farmer starts the game with five seeds.
  - planted seed
      - planted seeds will have an interval that determines when they get thirsty (boolean). seeds do not produce sparkles
  - watered seed
      - watered seeds will have an interval that determines when they grow. when a watered seed grows, it must be removed from the canvas and replaced with a mvp: flower, stretch: sapling
  
- saplings (stretch)
  - saplings are not seeds and saplings are not flowers. saplings are a planted seed that has been watered by the farmer. saplings are not to be implemented in the mvp. saplings  need to be watered in order to grow. saplings will have an interval that determines when they get thirsty. saplings do not produce sparkles. 
  - watered sapling
      - watered saplings will also have an interval that determines when they grow. when a watered sapling grows, it must be removed from the canvas and replaced with a flower.
  
- plop of dirt s (mvp)
  - plop of dirt is an area that can be full or empty (boolean). empty plops of dirt can receive a seed from the farmer. full plops of dirt  do nothing. useless piece's of 💩.
 
- flowers (mvp)
  - flowers are the final evolution of the seed. flowers will have an interval that determines when they get thirsty (boolean). when a flower gets watered it will be removed from the cancas and replaced with a watered flower.
- watered flower
  - watered flowers will have an interval that determines when they produce a sparkle.  watered flowers will have an interval that determines when they get thirsty. when a watered flower gets thirsty it will be removed from the canvas and replaced with a flower. when a watered flower produces a sparkle, the sparkle count goes up.
  
- the farmer (mvp)
  - the farmer is the player! the farmer will be on top of the background but behind the plop of dirt /flowers/saplings. the farmer. 
  
- sparkles (mvp)
  - sparkles will have a count that goes up if a watered flower produces a sparkle. the sparkle count will go down (stretch) if anything is purchased from the shop.
- timer (mvp)
  - the timer will start at 3 minutes and count down when the player starts the game. when the counter reaches 0 all seed, sapling(stretch), and flower intervals will be cleared and the game: mvp, wave: stretch will end.

### Verbs
actions that my things can act:
- move (mvp)
  - the player can use the arrow keys to move the farmer left <- or right ->
- plant (mvp)
  - the player can press the  x key while the farmer is in front of a plop of dirt to plant a seed. this will remove one seed from the seed count. planting on an already full plop of dirt will not remove seeds from the seed count.
- water (mvp)
  - the player can press the z key while the farmer is in front of a thirsty seed/sapling/flower to water it. watering an already watered seed/sapling/flower will do nothing.
- grow (mvp)
  - growing removes seeds and saplings(stretch) from the canvas and replaces them with saplings(stretch) and flowers respectively. each has an interval that determines when they grow. 
- produce (mvp)
  -  only watered flowers can produce. when produce happens, the sparkle counter goes up depending on the watered flowers production rate. for mvp, the production rate is the same for all flowers.

### Adjectives
and how does that make you feel?
- delightful
  - happy color scheme
  - cute art
  - pleasant layout
- relaxing
  - ample time
  - easy to play
  - hard to lose
  - soft music
- surprising (super stretch)
  - dude wouldn't it be cool if you had like 1/100 chance to get a off color flower? totally gonna add this if I finish all my stretch goals

## Final Thoughts

