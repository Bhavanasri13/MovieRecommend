import pandas as pd
from surprise import SVD, Dataset, Reader

# Step 1: Define the dataset
# Example dataset with user ratings for movies
data_dict = {
    'user_id': [1, 1, 2, 2, 3, 3, 4, 4],
    'movie_id': [101, 102, 101, 103, 104, 105, 103, 102],
    'rating': [5, 4, 4, 5, 3, 4, 5, 3]
}
df = pd.DataFrame(data_dict)

# Movie metadata
movies = {
    101: {'title': 'Mad Max: Fury Road', 'genre': 'Action'},
    102: {'title': 'The Hangover', 'genre': 'Comedy'},
    103: {'title': 'The Shawshank Redemption', 'genre': 'Drama'},
    104: {'title': 'Interstellar', 'genre': 'Sci-Fi'},
    105: {'title': 'Forrest Gump', 'genre': 'Drama'}
}

# Step 2: Prepare the data for the SVD model
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(df[['user_id', 'movie_id', 'rating']], reader)
trainset = data.build_full_trainset()

# Step 3: Train the SVD model
svd = SVD()
svd.fit(trainset)

# Step 4: Define a filtering function
def svd_filtering(user_id, genre_filter=None, min_rating=0):
    recommendations = []

    # Predict ratings for all movies for the given user
    for movie_id, movie_info in movies.items():
        predicted_rating = svd.predict(user_id, movie_id).est

        # Apply filtering: Genre and Minimum Rating
        if genre_filter and movie_info['genre'] != genre_filter:
            continue
        if predicted_rating < min_rating:
            continue

        # Add movie to the recommendations list
        recommendations.append({
            'movie_id': movie_id,
            'title': movie_info['title'],
            'genre': movie_info['genre'],
            'predicted_rating': round(predicted_rating, 2)
        })

    # Sort by predicted rating (highest first)
    recommendations = sorted(recommendations, key=lambda x: x['predicted_rating'], reverse=True)

    return recommendations

# Step 5: Test the filtering function
# Example: Get recommendations for User ID 1 with a "Drama" genre filter and minimum rating of 4
user_id = 1
filtered_recommendations = svd_filtering(user_id, genre_filter="Drama", min_rating=4)

