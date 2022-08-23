# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  rating      :string           not null
#  runtime     :string           not null
#  title       :string           not null
#  video_type  :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_videos_on_title  (title)
#
class Video < ApplicationRecord
    #Validations
    validates :description, :rating, :runtime, :title, :video_type, presence: true

    has_many :video_genres,
        class_name: :VideoGenre,
        foreign_key: :video_id,
        primary_key: :id

    has_many :genres,
        through: :video_genres,
        source: :genre

    has_one_attached :thumbnail
    has_one_attached :video
end
