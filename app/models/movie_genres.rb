# == Schema Information
#
# Table name: movie_genres
#
#  id         :bigint(8)        not null, primary key
#  movie_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MovieGenre < ApplicationRecord
    validates :movie_id, :genre_id, presence: true

    belongs_to :movie

    belongs_to :genre
end
