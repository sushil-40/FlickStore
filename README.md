# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# FlickStore

FlickStore is a movie discovery application that allows users to search for movies, watch trailers, and save movies into categories like "Drama" and "Action." The application integrates data from TMDB (The Movie Database) API to fetch movie information and trending titles.

---

## Features

- Search for movies by title.
- View trending movies.
- Watch trailers directly in the app.
- Save movies to categorized lists: "Drama" and "Action."
- Dynamic background updates based on movie search.
- User-friendly, responsive design optimized for mobile and desktop.

---

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **TMDB API**: Fetch movie data and trending content.
- **CSS & BootStrap**: For styling and responsiveness.
- **JavaScript**: Application logic and interactivity.
- **Yarn & Vite**: For fast project setup and build processes.

---

## Installation

### Prerequisites

- Node.js and Yarn installed.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/sushil-40/flickstore.git
   cd flickstore
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory with the following:

   ```env
   VITE_APIKEY=your_tmdb_api_key
   ```

   Replace `your_tmdb_api_key` with your actual API key from [TMDB](https://www.themoviedb.org/).

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open the application in your browser at the URL provided by Vite (e.g., `http://localhost:3000`).

---

## Usage

1. Use the search bar to find movies by title.
2. View trending movies in the "Trending Movies" section.
3. Save movies to your preferred category ("Drama" or "Action").
4. Watch trailers by selecting a movie.

---

## Attribution

This application uses data and APIs from TMDB (The Movie Database).

### TMDB Logo and Notice

The TMDB logo and attribution are displayed in the footer as per TMDB's requirements.

> "This application uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB."

For more details, visit [TMDB](https://www.themoviedb.org/).

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Roadmap

- Add user authentication.
- Enhance movie categorization with additional genres.
- Enable persistent movie lists with backend integration.
- Add multi-language support.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any features, fixes, or improvements.

---

## Contact

For questions or suggestions, please contact:

- **Sushil Dangoriya**
- Email: [grayson.9999@gmail.com]
- GitHub: [https://github.com/sushil-40]

---
