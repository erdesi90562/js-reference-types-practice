#Title: MBTA Homework

## To start

Fork, clone, branch (practice) and npm install

## Objectives:
- Practice with functions, arrays, and properties of an object literal.
- You may submit a pull request for this practice, but it is not required.

## Activity:

- Create a function in `lib/mbta.js` to calculate the number of stops between stations on the "MBTA". Write additional functions used by this function as needed.
- The function takes the line and stop that a rider is getting on at and the line and stop that user is getting off at and **returns the total number of stops for the trip**.

There are 3 subway lines:

- The Red line has the following stops: South Station, Park Street, Kendall, Central, Harvard, Porter, Davis, Alewife
- The Green line has the following stops: Government Center, Park Street, Boylston, Arlington, Copley, Hynes, Kenmore
- The Orange line has the following stops:  North Station, Haymarket, Park Street, State, Downtown Crossing, Chinatown, Back Bay, Forest Hills
- All 3 subway lines intersect at *Park Street*, but there are no other intersection points. Some of this MBTA is fictionalized.

## Checking your solution

Run `grunt test`.

## Hints:

* Assume good input.  Your function need not check the validity of the line or stop.
* Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
* Subway lines are properties in an object literal (hashmap), while the values are an array of all the stops on each line.
* The key to the lab is to find the __intersection__ of the lines at *Park Street*.
* Solve an easier problem first.

## Bonus

Think about adding Haymarket to the Green line.  Try to find a solution for multiple intersections.  Is there a way to decide if a particular solution is "correct"?

This bonus is completely optional and does not have tests, yet.

