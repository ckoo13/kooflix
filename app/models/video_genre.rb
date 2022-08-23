# == Schema Information
#
# Table name: video_genres
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  genre_id   :integer          not null
#  video_id   :integer          not null
#
# Indexes
#
#  index_video_genres_on_genre_id               (genre_id)
#  index_video_genres_on_genre_id_and_video_id  (genre_id,video_id) UNIQUE
#  index_video_genres_on_video_id               (video_id)
#
class VideoGenre < ApplicationRecord
    validates :video_id, :genre_id, presence: true

    belongs_to :video,
        class_name: :Video,
        foreign_key: :video_id,
        primary_key: :id

    belongs_to :genre,
        class_name: :Genre,
        foreign_key: :genre_id,
        primary_key: :id
end
