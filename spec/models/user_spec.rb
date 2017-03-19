require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) {build(:user)}

  it "has a valid factory" do
    expect(user).to be_valid
    expect(user.email).to be_a(String)
    expect(user.password).to be_a(String)
  end

  it 'has projects' do
    should have_many(:projects).with_foreign_key('owner_id')
  end

  it 'has rewardings' do
    should have_many(:rewardings)
  end

  it 'has rewards though rewardings' do
    should have_many(:rewards).through(:rewardings)
  end

  it 'has supported projects through rewards' do
    should have_many(:supported_projects).through(:rewards)
  end
  
  it 'requires an email' do
    should validate_presence_of(:email)
  end

  it 'requires a password digest' do
    should validate_presence_of(:password_digest)
  end

  it 'requires a session token' do
    should validate_presence_of(:session_token)
  end

  it 'has a min length of 6 for the password' do
    should validate_length_of(:password).is_at_least(6)
  end

  it 'validates that the email is unique' do
    should validate_uniqueness_of(:email)
  end

  describe '#reset_token!' do
    it 'resets the session token' do
      original_token = user.session_token
      user.reset_token!
      expect(user.session_token).not_to eq(original_token)
    end
  end

  describe '@find_by_credentials' do
    before(:each) do
      user.save!
    end

    after(:each) do
      user.destroy!
    end

    let(:email) {user.email}
    let(:password) {user.password}

    it 'finds the user with a given email and password' do
      allow(user).to receive(:valid_password?).with(password).and_return(true)
      expect(User.find_by_credentials(email, password)).to eq(user)
    end

    it 'returns nil if the email does not match' do
      allow(user).to receive(:valid_password?).with(password).and_return(true)
      expect(User.find_by_credentials('lorem', password)).to eq(nil)
    end

    it 'returns nil if the password is not valid' do
      allow_any_instance_of(User).to receive(:valid_password?).with(password).and_return(false)
      expect(User.find_by_credentials(email, password)).to eq(nil)
    end
  end

  describe('#password=') do
    it 'sets the user\'s password' do
      user.password = 'foo'
      expect(user.password).to eq('foo')
    end

    it 'overwrites the original password digest' do
      old_digest = user.password_digest
      user.password = 'foo'
      expect(user.password_digest).not_to eq(old_digest)
    end
  end
end
