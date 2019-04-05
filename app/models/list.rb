# == Schema Information
#
# Table name: lists
#
#  id         :bigint(8)        not null, primary key
#  list_name  :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
    # validates :user_id, presence: true, unique: true

    belongs_to :user
    
    has_many :list_movies
    
    has_many :movies,
    through: :list_movies,
    source: :movie

end
