# == Schema Information
#
# Table name: list_movies
#
#  id         :bigint(8)        not null, primary key
#  list_id    :integer          not null
#  movie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ListMovie < ApplicationRecord
    validates :list_id, :movie_id, presence: true

    belongs_to :list
    
    belongs_to :movie
end
