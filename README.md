# bussin-bagels
# What is bussin bagels?
You will have 30 seconds to build the best bagel sandwich that you can! Catch every ingrendient that would be on your bagel sandwich, if you catch anything that you wouldn't want to eat you lose!
You will be able to use your arrow keys to move your bagel back and fourth. Ingredients you would want to catch include: ham, lettuce, tomato, mayo, and bacon! 
Make sure to watch out for the cockroaches, if you get one of those on your bagel you lose! Who would want to eat a cockroach, right?

deployed version - https://evankski.github.io/bussin-bagels-pq/

This project was completed using canvas

![Screen Shot 2022-02-10 at 4 03 11 PM](https://user-images.githubusercontent.com/95590888/153517627-a85c46ee-15ae-4702-805b-738fb0fa758b.png)


# MVP 
* Created a game canvas that containes a bagel, ingrediets (bacon, lettuce, tomato, mayo, ham), a cockroach, a 30second timer, and a score tracker
* Made a start/restart button
* If you touch a cockroach, all intervals stop and it shows "Game Over" with your score
* if you reach the 30 second timer, it will say "time's up" followed by your score
* a full screen to move back and forth using arrow keys or A and D keys


# Completed Stretch Goals
* Added background music
* Added sound when items are collected
* Had all ingredients spawn at a random patten each game and wave

# Changed MVP's
* Originally the game was going to have only three sections to hop back and forth on, however it made more sense to create full movement over the entire canvas.
* I decided to not add turkey as well so the game didn't feel cluttered with ingredients to catch

# Stretch Goals not reached
* increasing the speed as the game goes on - it was a bit difficult to do with the for loops I used for dropping the ingredients. If I increased the speed throughout the game it would be very repeated code

# code highlight
To make the ingredients and cockroach seem to randomly appear I actually just changed the x and y axis to reset randomly every 6 seconds. This creates the illusion that there is a new element everytime when it is infact the same element.

![Screen Shot 2022-02-10 at 4 17 57 PM](https://user-images.githubusercontent.com/95590888/153518826-68368c9f-70cd-474c-a71d-51cd3b6a48e7.png)


To make the ingredients instantly vanish I also changed it to quickly bring the element to the top of the page to appear as though the bagel made the ingredient dissapear

![Screen Shot 2022-02-10 at 4 17 29 PM](https://user-images.githubusercontent.com/95590888/153518790-3516559b-7e4a-42ef-a60c-5eadd7f25018.png)


# Original Wireframe
![IMG_2211 2](https://user-images.githubusercontent.com/95590888/153518883-58a8a878-a8da-4aae-9ad3-19ccb258d5ce.jpg)

credit for pictures 
* resturaunt https://i.pinimg.com/originals/bd/6b/15/bd6b157fb36ca4ebb6328598ed490e27.png
* cockroach https://thumbs.dreamstime.com/z/cartoon-cockroach-vector-illustration-34914373.jpg
* bagel https://www.how-to-draw-funny-cartoons.com/images/how-to-draw-a-bagel-010.jpg
* tomato https://thumbs.dreamstime.com/b/slice-tomato-icon-cartoon-style-vector-web-design-isolated-white-background-170949370.jpg
* mayo https://thumbs.dreamstime.com/b/cartoon-jar-mayonnaise-digital-illustration-207224651.jpg
* ham https://cdn3.vectorstock.com/i/1000x1000/56/07/sandwich-meat-slice-icon-cartoon-style-vector-32695607.jpg
* bacon https://www.vectorstock.com/royalty-free-vector/cute-fried-beef-bacon-breakfast-food-cartoon-vector-20413198
