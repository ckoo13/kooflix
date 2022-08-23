# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_genres_on_name  (name) UNIQUE
#
class Genre < ApplicationRecord
    validates :name, presence: true

    has_many :video_genres,
        class_name: :VideoGenre,
        foreign_key: :genre_id,
        primary_key: :id

    has_many :videos,
        through: :video_genres,
        source: :video
end
