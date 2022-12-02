# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of this application is to display a variety of soccer players (some retired and some active) and to allow the user to choose any combination of players to add to a list. Once added to the list, the user will be able to view useful statistics: the average age of the players in the list and the total number of goals scored by players on the list. This allows users to easily view statistics without having to perform the calculations manually.

### Usability Principles Considered
One usability principle I considered was efficiency. I wanted to ensure that the process of aggregation was fast and clear. Therefore, upon adding a player to the list, the average age and total goals aggregation is performed; there is no need to click another button to perform this action which I feel improves the efficiency. Furthermore, I took comprehensibility into account. I wanted the application to be very intuitive, so I made sure to use my color scheme and button labelling/placement to make the flow of the site very clear. For example, I have an "add to list" button on each player card, and that button turns into a "remove" button once the card is already on the list. One other usability principle I considered was visibility. I wanted to make sure that every option is laid out for the user to see clearly. Therefore, all the filters I have are in central locations on the page and are labelled clearly with their function. Furthermore, all the buttons are clearly clickable and are also labelled with their function.

### Organization of Components
I created a component for the player card because I knew I would have 12 of them, so it made sense to group that logic together. I also created a component for the list because I needed to maintain the aggregation logic. I then created a Main component to group together the player cards in one place. 

### How Data is Passed Down Through Components
I have a javascript file containing all the data on the players. I then import that data into the App.js file. From there, I am able to pass it into my other components such as Main, Player, and List.

### How the User Triggers State Changes
When a user clicks the button to add a player to the list, a state variable that keeps track of the items in the list is updated and the list component is re-rendered. As for the filters and sorting, there are state variables for each filter/sort. When one of the filter/sorting buttons is clicked, the state variable corresponding to said filter is triggered. Then, upon a state variable change regarding filters/sort, I check the status of each state variable and update the players that are visible (also stored in a state variable) based off the change in filters/sorting. 
