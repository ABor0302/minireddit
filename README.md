# Reddit Client App

This project is a Reddit client application that lists, searches, and displays detailed views of posts using the Reddit API. The application is developed with React, Redux Toolkit, Axios, Tailwind CSS, Jest, and React Testing Library.

## Features
- List posts from the Reddit API
- Search and filter functionality
- Display detailed post information
- Infinite scroll to load more content
- Upvote and downvote buttons
- Responsive design
- Unit and component tests

## Installation and Setup

### Requirements
- Node.js (v16+ recommended)
- npm or yarn package manager

### Installation
Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/reddit-miniredditgi.git
cd minireddit
Install the dependencies:

npm install
# or
yarn install
Running the App
To start the development server:

npm start
# or
yarn start
The app will be available at http://localhost:3000.

Running Tests
To run the tests:

npm test
# or
yarn test

Project Structure

/src/components: Contains application components (e.g., Post, PostList, Header)
/src/store: Redux state and actions (e.g., slice files, thunks)

Key Components and Structure

Post: Displays basic information for each post.
PostList: Responsible for rendering the list of posts.
PostDetails: Shows the full details and comments of a post on the detail page when clicked.
Header: Allows navigation to the home page and includes a search feature.

API Usage

Fetching Posts: Fetches posts from the Reddit API and stores them in Redux.
Post Details: Displays complete information and comments of a post on the detail page using postId.
Search: Allows users to search for posts based on entered keywords.