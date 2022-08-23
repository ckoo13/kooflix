# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  profile_id :integer          not null
#  video_id   :integer          not null
#
# Indexes
#
#  index_lists_on_profile_id               (profile_id)
#  index_lists_on_profile_id_and_video_id  (profile_id,video_id) UNIQUE
#  index_lists_on_video_id                 (video_id)
#
class List < ApplicationRecord
    validates :video_id, :profile_id, presence: true

    belongs_to :video,
        class_name: :Video,
        foreign_key: :video_id,
        primary_key: :id

    belongs_to :profile,
        class_name: :Profile,
        foreign_key: :profile_id,
        primary_key: :id
end
