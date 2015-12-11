require 'rails_helper'
require 'spec_helper'

# RSpec.feature "Auths", type: :feature do
describe 'auth' do
  let(:test) { build(:user) }
  let(:invalid_user) {build(:user, email: nil, password: "asdf")}

  feature "the signup process" do

    it "has a new user page" do
      visit new_user_url
      expect(page).to have_content "Create an account"
    end

    feature "creating a new user" do

      it "has a link to user's account after signup" do
        sign_up(test)

        expect(page).to have_content "Your Account"
      end

      it "promts the user if the password is too short" do
        sign_up(invalid_user)
        expect(page).to have_content "Password is too short (minimum is 6 characters)"
      end

      it "promts the user if the email field is blank" do
        sign_up(invalid_user)
        expect(page).to have_content "Email can't be blank"
      end
    end
  end

  feature "logging out" do
    it "begins with a logged out state" do
      visit root_url
      expect(page).to have_content "Log In"
    end

    it "properly logs the user out" do
      sign_up(test)

      click_on "Sign Out"
      expect(page).to_not have_content "Your Account"
    end
  end
end
