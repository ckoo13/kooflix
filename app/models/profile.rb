# == Schema Information
#
# Table name: profiles
#
#  id         :bigint           not null, primary key
#  avatar     :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_profiles_on_name              (name)
#  index_profiles_on_name_and_user_id  (name,user_id) UNIQUE
#  index_profiles_on_user_id           (user_id)
#
class Profile < ApplicationRecord
    validates :name, :user_id, :avatar, presence: true

    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

end
