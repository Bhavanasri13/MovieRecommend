/*document.addEventListener("DOMContentLoaded", () => {
    const mainDropdown = document.getElementById("main-dropdown");
    const subDropdownContainer = document.getElementById("sub-dropdown-container");
    const subDropdown = document.getElementById("sub-dropdown");
    const recommendationsDiv = document.getElementById("recommendations");

    const genres = ["Action", "Comedy", "Drama", "Sci-Fi","Horror","Thriller","Romance","Crime"];
    
    const genreMovies = {
        Action: ["Mad Max: Fury Road", "John Wick", "Gladiator"],
        Comedy: ["The Hangover", "Superbad", "Step Brothers"],
        Drama: ["The Shawshank Redemption", "The Godfather", "Forrest Gump"],
        "Sci-Fi": ["Interstellar", "Inception", "The Matrix"],
        Horror: ["A Quiet Place: Day One" , "The Exorcist: Believer" , "Five Nights at Freddy's" ],
        Thriller: ["Hit Man","Under Paris","The Last Stop in Yuma County"],
        Romance: ["Anyone But You (2023)","Always Be My Maybe","Call Me By Your Name"],
        Crime: ["The Execution","Illusions for Sale","Duffle Bag Boy"]

    };

    const movieNames = ["Titanic", "Avatar", "Avengers"];
    const movieRecommendations = {
        Titanic: ["The Notebook", "A Walk to Remember", "Pride and Prejudice"],
        Avatar: ["Interstellar", "The Martian", "Gravity"],
        Avengers: ["Iron Man", "Thor", "Captain America"]
    };

    mainDropdown.addEventListener("change", (event) => {
        subDropdownContainer.classList.remove("hidden");
        subDropdown.innerHTML = '<option value="" disabled selected>Select an Option</option>';

        const value = event.target.value;
        if (value === "genre") {
            genres.forEach((genre) => {
                const option = document.createElement("option");
                option.value = genre;
                option.textContent = genre;
                subDropdown.appendChild(option);
            });
        } else if (value === "movie-name") {
            movieNames.forEach((movie) => {
                const option = document.createElement("option");
                option.value = movie;
                option.textContent = movie;
                subDropdown.appendChild(option);
            });
        }
    });

    subDropdown.addEventListener("change", (event) => {
        recommendationsDiv.classList.remove("hidden");
        recommendationsDiv.innerHTML = "";

        const value = event.target.value;
        const recommendations =
            mainDropdown.value === "genre"
                ? genreMovies[value]
                : movieRecommendations[value];

        recommendations.forEach((movie) => {
            const movieElement = document.createElement("div");
            movieElement.textContent = movie;
            movieElement.style.margin = "10px 0";
            recommendationsDiv.appendChild(movieElement);
        });
    });
});

/*document.addEventListener("DOMContentLoaded", () => {
    const profileName = "Harshitha";
    const profileEmail = "harshi@gmail.com";
    const profileLocation = "New York, USA";
    const profileGenres = ["Action", "Comedy", "Sci-Fi"];
    const profileActors = ["Leonardo DiCaprio", "Scarlett Johansson"];

    const watchedMoviesContainer = document.getElementById("watched-movies");

    const displayProfileDetails = () => {
        document.getElementById("welcome-message").textContent = `Welcome, ${profileName}`;
        document.getElementById("profile-name").textContent = profileName;
        document.getElementById("profile-email").textContent = profileEmail;
        document.getElementById("profile-location").textContent = profileLocation;
        document.getElementById("profile-genres").textContent = profileGenres.join(", ");
        document.getElementById("profile-actors").textContent = profileActors.join(", ");
    };
document.addEventListener("DOMContentLoaded", () => {
    const mainDropdown = document.getElementById("main-dropdown");
    const subDropdownContainer = document.getElementById("sub-dropdown-container");
    const subDropdown = document.getElementById("sub-dropdown");
    const recommendationsDiv = document.getElementById("recommendations");
    const watchedMoviesContainer = document.getElementById("watched-movies");

    // Placeholder for genres and movies
    const genres = ["Action", "Comedy", "Drama", "Sci-Fi"];
    const genreMovies = {
        Action: ["Mad Max: Fury Road", "John Wick", "Gladiator"],
        Comedy: ["The Hangover", "Superbad", "Step Brothers"],
        Drama: ["The Shawshank Redemption", "The Godfather", "Forrest Gump"],
        "Sci-Fi": ["Interstellar", "Inception", "The Matrix"]
    };

    const movieNames = ["Titanic", "Avatar", "Avengers"];
    const movieRecommendations = {
        Titanic: ["The Notebook", "A Walk to Remember", "Pride and Prejudice"],
        Avatar: ["Interstellar", "The Martian", "Gravity"],
        Avengers: ["Iron Man", "Thor", "Captain America"]
    };

    // Save watched movies to localStorage
    const saveWatchedMovies = (movie) => {
        const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
        if (!watchedMovies.includes(movie)) {
            watchedMovies.push(movie);
            localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
        }
    };

    // Function to display watched movies on the Profile page
    const displayWatchedMovies = () => {
        const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
        watchedMoviesContainer.innerHTML = ""; // Clear the container
        watchedMovies.forEach((movie) => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie-item");
            movieDiv.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="${movie} Poster">
                <p>${movie}</p>
                <p>Rated: 4/5</p>
            `;
            watchedMoviesContainer.appendChild(movieDiv);
        });
    };

    // Handle main dropdown selection
    mainDropdown?.addEventListener("change", (event) => {
        subDropdownContainer.classList.remove("hidden");
        subDropdown.innerHTML = '<option value="" disabled selected>Select an Option</option>';

        const value = event.target.value;
        if (value === "genre") {
            genres.forEach((genre) => {
                const option = document.createElement("option");
                option.value = genre;
                option.textContent = genre;
                subDropdown.appendChild(option);
            });
        } else if (value === "movie-name") {
            movieNames.forEach((movie) => {
                const option = document.createElement("option");
                option.value = movie;
                option.textContent = movie;
                subDropdown.appendChild(option);
            });
        }
    });

    // Handle sub dropdown selection
    subDropdown?.addEventListener("change", (event) => {
        recommendationsDiv.classList.remove("hidden");
        recommendationsDiv.innerHTML = "";

        const value = event.target.value;
        const recommendations =
            mainDropdown.value === "genre"
                ? genreMovies[value]
                : movieRecommendations[value];

        recommendations.forEach((movie) => {
            const movieElement = document.createElement("div");
            movieElement.textContent = movie;
            movieElement.style.margin = "10px 0";
            recommendationsDiv.appendChild(movieElement);

   // Function to display watched movies
   const displayWatchedMovies = () => {
    const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    watchedMoviesContainer.innerHTML = ""; // Clear the container
    if (watchedMovies.length === 0) {
        watchedMoviesContainer.innerHTML = "<p>No movies watched yet.</p>";
    } else {
        watchedMovies.forEach((movie) => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie-item");
            movieDiv.innerHTML = `
                <img src="https://via.placeholder.com/150" alt="${movie} Poster">
                <p>${movie}</p>
                <p>Rated: 4/5</p>
            `;
            watchedMoviesContainer.appendChild(movieDiv);
        });
    }
};

// Display data on load
displayProfileDetails();
displayWatchedMovies();
});*/
document.addEventListener("DOMContentLoaded", () => {
    const mainDropdown = document.getElementById("main-dropdown");
    const subDropdownContainer = document.getElementById("sub-dropdown-container");
    const subDropdown = document.getElementById("sub-dropdown");
    const recommendationsDiv = document.getElementById("recommendations");

    // Genre and movie data with image URLs
    const genres = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror",  "Crime"];
    
    
    const genreMovies = {
        Action: [
            { name: "Mad Max: Fury Road", poster: "images/madmax.jpg" },
            { name: "John Wick", poster: "images/johnwick.jpg" },
            { name: "Gladiator", poster: "images/gladiator.jpg" }
        ],
        Comedy: [
            { name: "The Hangover", poster: "images/hangover.jpg" },
            { name: "Superbad", poster: "images/superbad.jpg" },
            { name: "Step Brothers", poster: "images/stepbrothers.jpg" }
        ],
        Drama: [
            { name: "The Shawshank Redemption", poster: "images/shawshank.jpg" },
            { name: "The Godfather", poster: "images/godfather.jpg" },
            { name: "Forrest Gump", poster: "images/forrestgump.jpg" }
        ],
        "Sci-Fi": [
            { name: "Interstellar", poster: "images/interstellar.jpg" },
            { name: "Inception", poster: "images/inception.jpg" },
            { name: "The Matrix", poster: "images/matrix.jpg" }
        ],
        Horror: [
            { name: "A Quiet Place", poster: "images/qp.jpg" },
            { name: "The Exorcist: Believer", poster: "images/eb.jpg" },
            { name: "Five Nights at Freddy's", poster: "images/fn.jpg" }
        ],
        Crime: [
            { name: "The Execution", poster: "images/e.jpg" },
            { name: "Illusions for Sale", poster: "images/i.jpg" },
            { name: "Duffle Bag Boy", poster: "images/di.jpg" }
        ]
    };

    const movieNames = ["Titanic", "Avatar", "Avengers"];
    const movieRecommendations = {
        Titanic: [
            { name: "The Notebook", poster: "images/notebook.jpg" },
            { name: "A Walk to Remember", poster: "images/walktoremember.jpg" },
            { name: "Pride and Prejudice", poster: "images/prideandprejudice.jpg" }
        ],
        Avatar: [
            { name: "Interstellar", poster: "images/interstellar.jpg" },
            { name: "The Martian", poster: "images/martian.jpg" },
            { name: "Gravity", poster: "images/gravity.jpg" }
        ],
        Avengers: [
            { name: "Iron Man", poster: "images/ironman.jpg" },
            { name: "Thor", poster: "images/thor.jpg" },
            { name: "Captain America", poster: "images/captainamerica.jpg" }
        ]
    };

    const moods = ["Happy", "Sad", "Excited"];
    const moodMovies = {
        Sad: [
            { name: "The Notebook", poster: "images/notebook.jpg" },
            { name: "A Walk to Remember", poster: "images/walktoremember.jpg" },
            { name: "Pride and Prejudice", poster: "images/prideandprejudice.jpg" }
        ],
        Happy: [
            { name: "Interstellar", poster: "images/interstellar.jpg" },
            { name: "The Martian", poster: "images/martian.jpg" },
            { name: "Gravity", poster: "images/gravity.jpg" }
        ],
        Excited: [
            { name: "Iron Man", poster: "images/ironman.jpg" },
            { name: "Thor", poster: "images/thor.jpg" },
            { name: "Captain America", poster: "images/captainamerica.jpg" }
        ]
    };

    const rating = ["Five", "Four", "Three"];
    const ratingMovies = {
        Five: [
            { name: "The Notebook", poster: "images/notebook.jpg" },
            { name: "A Walk to Remember", poster: "images/walktoremember.jpg" },
            { name: "Pride and Prejudice", poster: "images/prideandprejudice.jpg" }
        ],
        Four: [
            { name: "Interstellar", poster: "images/interstellar.jpg" },
            { name: "The Martian", poster: "images/martian.jpg" },
            { name: "Gravity", poster: "images/gravity.jpg" }
        ],
        Three: [
            { name: "Iron Man", poster: "images/ironman.jpg" },
            { name: "Thor", poster: "images/thor.jpg" },
            { name: "Captain America", poster: "images/captainamerica.jpg" }
        ]
    };

    // Populate the secondary dropdown based on the main selection
    mainDropdown.addEventListener("change", (event) => {
        subDropdownContainer.classList.remove("hidden");
        subDropdown.innerHTML = '<option value="" disabled selected>Select an Option</option>';

        const value = event.target.value;
        if (value === "genre") {
            genres.forEach((genre) => {
                const option = document.createElement("option");
                option.value = genre;
                option.textContent = genre;
                subDropdown.appendChild(option);
            });
        } else if (value === "mood") {
            moods.forEach((mood) => {
                const option = document.createElement("option");
                option.value = mood;
                option.textContent = mood;
                subDropdown.appendChild(option);
            });
        } else if (value === "rating") {
            rating.forEach((rating) => {
                const option = document.createElement("option");
                option.value = rating;
                option.textContent = rating;
                subDropdown.appendChild(option);
            });
        } else if (value === "movie-name") {
            movieNames.forEach((movie) => {
                const option = document.createElement("option");
                option.value = movie;
                option.textContent = movie;
                subDropdown.appendChild(option);
            });
        }
    });

    // Populate the secondary dropdown based on the main selection
    /*mainDropdown.addEventListener("change", (event) => {
        subDropdownContainer.classList.remove("hidden");
        subDropdown.innerHTML = '<option value="" disabled selected>Select an Option</option>';

        const value = event.target.value;
        if (value === "genre") {
            genres.forEach((genre) => {
                const option = document.createElement("option");
                option.value = genre;
                option.textContent = genre;
                subDropdown.appendChild(option);
            });
            else if (value === "mood") {
                movieNames.forEach((movie) => {
                    const option = document.createElement("option");
                    option.value = movie;
                    option.textContent = movie;
                    subDropdown.appendChild(option);
                });
            }
            else if (value === "rating") {
                movieNames.forEach((movie) => {
                    const option = document.createElement("option");
                    option.value = movie;
                    option.textContent = movie;
                    subDropdown.appendChild(option);
                });
            }
            else if (value === "movie-name") {
            movieNames.forEach((movie) => {
                const option = document.createElement("option");
                option.value = movie;
                option.textContent = movie;
                subDropdown.appendChild(option);
            });
        }
        
    });*/

    // Display recommendations based on the selection
    subDropdown.addEventListener("change", (event) => {
        recommendationsDiv.classList.remove("hidden");
        recommendationsDiv.innerHTML = "";

        const value = event.target.value;
        let recommendations;
        if (mainDropdown.value === "genre") {
            recommendations = genreMovies[value];
        } else if (mainDropdown.value === "mood") {
            recommendations = moodMovies[value];
        } else if (mainDropdown.value === "rating") {
            recommendations = ratingMovies[value];
        } else {
            recommendations = movieRecommendations[value];
        }

        // Display each recommendation as an image and a title
        recommendations.forEach((movie) => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie-item");

            movieElement.innerHTML = `
                <img src="${movie.poster}" alt="${movie.name} Poster" class="movie-poster">
                <p class="movie-title">${movie.name}</p>
            `;
            recommendationsDiv.appendChild(movieElement);
        });
    });
});
    // Display recommendations based on the selection
    /*subDropdown.addEventListener("change", (event) => {
        recommendationsDiv.classList.remove("hidden");
        recommendationsDiv.innerHTML = "";

        const value = event.target.value;
        const recommendations =
            mainDropdown.value === "genre"
                ? genreMovies[value]
                : movieRecommendations[value];

        // Display each recommendation as an image and a title
        recommendations.forEach((movie) => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie-item");

            movieElement.innerHTML = `
                <img src="${movie.poster}" alt="${movie.name} Poster" class="movie-poster">
                <p class="movie-title">${movie.name}</p>
            `;
            recommendationsDiv.appendChild(movieElement);
        });
    });
});
*/
