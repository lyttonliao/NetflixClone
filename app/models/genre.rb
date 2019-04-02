# == Schema Information
#
# Table name: genres
#
#  id         :bigint(8)        not null, primary key
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
    validates :type, presence: true, unique: true

    has_many :movie_genres
end
