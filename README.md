<a name="readme-top"></a>

<div align="center">

  <p align="center">
  <a href="[https://github.com/YassMaldini/maiia-clone](https://github.com/YassMaldini/maiia-clone)">
      <h1 align="center">Maiia Clone</h1>
  </a>
  </p>
  
  <p align="center">
    <b>A basic clone of Maiia's mobile app based on the real API.</b>
  </p>
</div>

<!-- GETTING STARTED -->

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Create a **.env.local** file following the example. Staging APIs are allowed.
  ```sh
  EXPO_PUBLIC_API_URL=https://xxx-xxx.mxxxx.com
  EXPO_PUBLIC_SUGGESTION_API_URL=https://xxxxxxxxxx.mxxxx.com
  ```

### Setup

1. Clone the repo
   ```sh
   git clone https://github.com/YassMaldini/maiia-clone.git
   ```
2. Install packages
   ```sh
   yarn
   ```
3. Prebuild the project
   ```sh
   npx expo prebuild
   ```
4. Create and run a development build locally
   ```sh
   yarn android|ios
   ```

## Features

This project only includes the pages and features that are available when not logged.

- [x] Home screen
- [x] Search
  - [x] Default page
  - [x] Search suggestions
  - [x] Search results
  - [x] Search filters (except languages)
  - [x] Popular localities
- [x] Practitioner screen
- [x] TLC screen
- [x] Dark mode
