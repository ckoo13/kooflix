# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord
    #Validations
    validates :email, :session_token, :password_digest, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    #Insert associations here
    has_many :profiles,
        class_name: :Profile,
        primary_key: :id,
        foreign_key: :user_id

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil if user.nil?

        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    def profiles
        
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
end
