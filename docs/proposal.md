Coin Merge Game
===============
Davin Haley, Valkyrie Maves, Dexter Peterson, and McKenna Aldach

The Need
--------
Everyone likes to play games, and children need instruction and practice in the coins of their country’s currency.  While the low-technology method of having your kids count your coin jar will always be an option, children need a way to practice with coins they cannot swallow.

Turning counting practice into a game with small goals, kids will be able to practice and learn through play. Research has shown that learning through play is the best learning method for children under the age of 6, our main target audience.

Our Solution
------------
Coin Merge is a game written in JavaScript for young children to practice coin counting skills by merging matching coins together until they create the next monetary coin, which will then replace the previous coins.  For example, a merge that would be five pennies becomes one nickel, or five dimes merged together become 2 quarters.

The game will use the 4 predominant four coins of US currency, with a dollar being the max amount merged to.  The theme of the game is a candy stand, where characters pay a certain amount and need the player to give them change.  A game board holds coins in individual squares, and when the correct amount of change is available, those parts will light up.  For example, if a character needs ten cents in change, all dimes will highlight and the character will have an option to “give change.” To the side of the game board is a change jar that can be tapped to add additional coins (lower denominations) to the game board for merging. When the child reaches the highest denomination (being the dollar) a customer may request a dollar or more in change. The child can put the dollar in the change jar to clear up the board for space if needed.

The Competition
---------------
Currently, there are multiple games using merges as the major gameplay.  However, they are not educationally based and written for adults rather than younger players.  There are also very few or no findable games for children to practice coin counting skills and change making skills currently available.

Some games available as merge games include Travel Town, Merge Mansion(https://play.google.com/store/apps/details?id=com.everywear.game5&hl=en_US&gl=US), and Merge Dragons(https://play.google.com/store/apps/details?id=com.gramgames.mergedragons&hl=en_US&gl=US).  These games are fun, but they are large and not aimed at children.  Current available coin count practice is through a written curriculum that may or may not make sense to the average parent, and may require supervision and interaction that could create obstacles for families where time and money are scarce resources.

![Alt: Image of Travel Town](/public/images/TravelTown.jpg)

Image of [Travel Town](https://play.google.com/store/apps/details?id=io.randomco.travel&hl=en_US&gl=US), a merging game currently available on Android

Sample UI
---------
We have a couple of different visuals for our sample UI. Our first image demonstrates what the general experience would look like overall while the second image focuses more on the general functionality of the game.

![Alt: First Sample UI](/public/images/startingUI.png)
![Alt: Second Sample UI](/public/images/startingUI2.PNG)

Scope
-----
Coin Merge will be a JavaScript-based game that is run in a browser window.  Any device that can run an internet browser should be able to play Coin Merge.  Coin Merge is an image-based game with click-and-drag play to combine like coins.

Our minimum for success includes:
<ol>
<li>A working game that practices money skills, particulary counting change</li>
<li>A never-ending sandbox level that allows infinite play</li>
<li>Game allows coins to be populated, destroyed, used to meet goals, and merged to create needed amounts</li>
</ol>

Additional Goals, should time permit, include:
<ol>
<li>A scoring system or another form of reassurance to encourage children to play more and see their progress</li>
<li>Score payout for different candy shop backgrounds and piggy bank icons to encourage more playthrough</li>
<li>Music options to entertain the child while playing</li>
</ol>

Potential Pitfalls
------------------
One potential pitfall for game play is the board becoming cluttered with coins that aren’t usable for current goals and making the game less playable/fun.  We have several ideas to approach this problem, but should none of our elegant solutions work, we will create a board reset button.
Another potential issue if because we are web-based, we will have to write it in a manner that it can be played in multiple browsers, including older browsers.
