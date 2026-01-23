# Actordle

This Application is a web game patterned after the many games fashioned after the famous "Wordle." Users will be able to test their knowledge of cinema by naming as many movies a given actor/actress was featured in within a 1:30 time period. Results will be able to be shared, but will also be pushed to a live leaderboard, where scores from other users will be displayed.

## Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown -- Most of the formatting in the .md file was pre-provided. However, minor tweaks and deletions were necessary to improve presentation and allow for the emphasis of certain words e.g. italics in the elevator pitch.
- [x] A concise and compelling elevator pitch -- This game should tailor to most audiences, but for my family in particular this will be a major competition. The inherent competition in the game should help users to continue using it.
- [x] Description of key features -- This list is surely not extensive, but that would be beyond the scope of this project. All major features that are central to the programs design are included.
- [x] Description of how you will use each technology -- All technologies have at least one implementation in the program, and though the list is not exhaustive, it includes major pivots for the project that are crucial to its functionality.
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references. -- Images included below: Login screen, game screen, and leaderboard display.


### Elevator pitch

We've all met that one person who knows way too much about movies -- but how much do they really know? Actordle stretches your knowledge of cinema to the very limit by challenging users to name as many movies a given actor/actress was featured in. Climb the leaderboard and share your results to see who *actually* knows the classics best out of your friends and family.

### Design

<img width="512" height="768" alt="Login" src="https://github.com/user-attachments/assets/95ef7fd8-320f-4ae5-8547-debc31e32812" />

![Design Image](https://github.com/user-attachments/assets/5a5ce55b-fc12-4759-8ec1-4260e6f35a64)

```mermaid
sequenceDiagram
    actor Friend
    actor You
    participant Website
    participant Timer
    participant Service
    participant Database

    You->>Website: Create Account/Login
    Website->>Database: Valid Login?
    Database-->>Website: Login Validation
    You->>Website: Start Game
    Website->>Timer: Initialize
    Timer-->>You: Display Time Remaining
    loop While time remains
        Website-->>You: Actor/Actress Provided
        You-->>Website: Guess Movie
        Website->>Service: Check Guess
        Service-->>Website: Guess result
        Website-->>You: Update Displayed Score
    end
    Website->>Database: Update Leaderboard
    Database-->>You: Display Updated Standings
    Database-->>Friend: Display Updated Standings
```

### Key features

- Login for authentication and persistence of user data
- New actor/actress every day
- Option to share score after the game
- Auto-complete movie guesses to avoid spelling errors
- Local personal bests stored to compare with previous high scores
- Live leaderboard showing all players’ scores in real time

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - One primary HTML page which will serve as an entry point to the application. React will then manage the login, game, and leaderboard views.
- **CSS** - UI that is fitted to both PC and mobile, allowing for users to quickly play wherever they are, sufficient and appealing contrast as well as basic visual assets.
- **React** - Start/Stop timer, relays guesses to service, track previous guesses, and track frontend displayed score, displays leaderboard, handles switches between login, game, and leaderboard.
- **Service** - Provides endpoints for the following:
    - Login
    - Registration
    - Fetching details on actors/actresses and the movies they featured in (external: TMDB)
    - Choosing an actor/actress of the day
    - Validating guesses
    - Tracking and updating scores
    - Retrieving the global leaderboard from the database.
- **DB/Login** - Stores global leaderboard, usernames, user data i.e. high scores, password hashes for login.
- **WebSocket** - As a user finishes a game their score is pushed to a live global leaderboard accessible to all other users.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [Actordle](https://actordle.click/).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I have a total of 4 HTML pages, which very well might go away when we get to react, but for now serve to navigate the functionality of the game.
- [x] **Proper HTML element usage** - All of the elements mentioned in the rubric along with a few others are included in the HTML files 
- [x] **Links** - nav links inserted in header
- [x] **Text** - How to play and what the site is explained on the about page.
- [x] **3rd party API placeholder** - I just had to leave an effective note on the site for this step. When the user types a guess, the box with auto complete to know movies as pulled from TMDB's open API, similarly,l the guess will be checked against he the known movies that the actor did or did not feature in.
- [x] **Images** - 2 images included on the play page.
- [x] **Login placeholder** - Login and Create account forms functioning.
- [x] **DB data placeholder** - Persisting leaderboard as included on the leaderboard page
- [x] **WebSocket placeholder** - Live feed enabled below guessing UI to allow fo users to compete live with one another.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
