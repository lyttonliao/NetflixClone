class User < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    validates :email, uniqueness: true, presence: true
    validates :session_token, uniqueness: true, presence: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    def password(password)
        @password = password
        self.password_digest = BCrypt::password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token!
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token!
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::password.new(self.password_digest).is_password?(password)
    end

    private
    def self.generate_session_token!
        SecureRandom::urlsafe.base64(16)
    end

end