class User < ApplicationRecord
    attr_reader :password

    validates :email, uniqueness: true, presence: true
    validates :session_token, uniqueness: true, presence: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 4, maximum: 60 }, allow_nil: true 

    after_initialize :ensure_session_token

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token!
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token!
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    private
    def self.generate_session_token!
        SecureRandom.urlsafe_base64
    end

end