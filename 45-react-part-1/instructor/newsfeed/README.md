# Creating a NewsFeed Component

This lab is meant to provide additional practice creating reusable React Components.

In `index.html`, you will find 3 article elements within the HTML section generating the newsfeed articles visible on the page.

Perform the following to complete the lab:

 - Create an array called `newsFeedData` that will contain 3 objects with the following properties:  `title`, `tags`, `image`, and `impressions`
 - Populate those objects based on those values assigned in the HTML which means you must examine the HTML and find those values assigned to each DOM element.
 - Create a `NewsFeedApp` component and pass it the `newsFeedData` array as `props`.
 - The `NewsFeedApp` component will then render 3 `articles` based on properties of the objects in the `newsFeedData` array.

## Summary of Steps

 1. create an array called newsFeedData that will contain the 3 objects
 1. create a NewsFeedApp component
 1. pass the NewsFeedApp component the newsFeedData as a prop
 1. render 3 html sections with that info
