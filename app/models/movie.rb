# == Schema Information
#
# Table name: movies
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Movie < ApplicationRecord
    validates :title, :year, :description, presence: true

    has_one_attached :movie
    has_one_attached :image

    has_many :list_movies
    has_many :movie_genres

    has_many :genres,
    through: :movie_genres,
    source: :genre
end
    
