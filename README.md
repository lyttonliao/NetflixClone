# README

[Live Site](https://flixitclone.herokuapp.com/#/login)

Flixit is inspired by Netflix. I chose my top-5 genres to display on the site. Flixit has all the same basic functionalities as Netflix. Users manage personalized accounts by adding videos to their watch list. The application displays information in different forms to engage viewers. 

# FEATURES

## Sign In and Sign Up

The user authentication process takes place in a single form. The user has access to both sign in and sign out forms based on the current path.

![alt text](https://github.com/lyttonliao/NetflixClone/blob/master/app/assets/images/Auth.png)

## Streaming

Flixit uses the default video player framework with additional features (i.e., back to browser button).

![alt text](https://github.com/lyttonliao/NetflixClone/blob/master/app/assets/images/Show.png)

<!-- ## Slide Bars (Work in progress)

Each item on the slide bars are links to the video's play page. The sliding bars have an infinite scroll feature. When hovering over an item, the item expands and displays its title, genres, and year; as it expands, its sibling containers will move while maintaining its shape. There is also a drop-down button that will display an indepth description of the movie. -->

<!-- ## Search (Work in progress)

The search bar continuously detects live changes to the input field to look for matches with similar title or the specified genre. -->

## My List

The user has the ability to add any video present from the database to their personalized page, 'My List'. Once the video has been added to their list, they can remove or view the video from their page.

## Code Snippets

The core of the application is the MovieIndexItem component. Every single page will be passing props to the MovieIndexItem, which controls the information, and dropdown menus for each movie in its respective genre/type row. It's imperative that all movies have it's full description passed down as props. Using a combination of filtering and mapping arrays, I am able to create a playlist row on the front page.

![alt text](https://github.com/lyttonliao/NetflixClone/blob/master/app/assets/images/movieindexitem.png) -->

Every single movie has a dropdown menu that provides a description of the movies. Through this dropdown menu, you can also play or add the movie to your playlist. If you hover over movies in the same row, the dropdown information will change to the hovered movie.

![alt text](https://github.com/lyttonliao/NetflixClone/blob/master/app/assets/images/Dropdown.png)

![alt text](https://github.com/lyttonliao/NetflixClone/blob/master/app/assets/images/ddinfo.png)

<!-- ## Profiles (Bonus Feature)

All accounts can store up to five individual profiles. -->
