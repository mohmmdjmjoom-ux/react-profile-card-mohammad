# Mini Profile Card

A small React app that renders a grid of profile cards from a plain JavaScript array.
One reusable `ProfileCard` component — the data decides what each card says.

![Finished grid](./screenshot.png)

## Setup

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

## Project structure

```
public/avatars/        the four avatar images
src/main.jsx           entry file (created by Vite)
src/App.jsx            maps over the profiles and renders one card per profile
src/ProfileCard.jsx    the reusable card component
src/ProfileCard.css    card styles (round avatar, border, hover, featured)
src/profiles.js        the data array
src/index.css          page layout and the grid
```

## Predictions — before building, and what actually happened

### 1. Rendering with `map` but forgetting the `key`

- **My prediction:** It gives an error because there is no key, or it shows nothing.
- **What actually happened:** The page looked completely normal — all the cards appeared.
  It was not an error, it was a **warning** in the console:
  `Each child in a list should have a unique "key" prop.`
  So a missing key does not break the page, but it breaks the "no warnings" rule.

### 2. Naming the component `profileCard` (lowercase)

- **My prediction:** Maybe it shows in small letters.
- **What actually happened:** Nothing appeared where the cards should be. React treats a lowercase
  name as a normal HTML tag, so it created an empty unknown element `<profilecard>` instead of
  calling my function. The console warned: `<profileCard /> is using incorrect casing. Use PascalCase
  for React components`. Components must start with a capital letter.

### 3. A default `{ bio = "No bio provided" }` when a profile has `bio: null`

- **My prediction:** "No bio provided" appears.
- **What actually happened:** It did **not** appear — the bio was empty. A default value only works when
  the prop is **missing** (`undefined`). `null` and `""` are real values, so the default is skipped.
  That is why my card uses `{bio || "No bio provided"}`, which works for missing, `null` and `""`.

## Stretch goals

- **Hover:** the card lifts with a box-shadow and the avatar grows slightly (plain CSS `:hover`).
- **No bio:** "No bio provided" shows for a missing bio, `null` and an empty string.
- **Featured card:** one profile has `featured: true` and gets a gold border through
  `className={featured ? "card featured" : "card"}`.
