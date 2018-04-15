source 'https://rubygems.org'

gem 'rails', '~> 4.2.4'
gem 'sqlite3'
# angular-rails-templates currently only works with sprocket-rails 2
gem 'sprockets-rails', '~> 2.3.3'

gem 'haml'
gem 'angular_rails_csrf'
gem 'angular-rails-templates'

source 'https://rails-assets.org' do
  gem 'rails-assets-angular'
  gem 'rails-assets-angular-route'
  gem 'rails-assets-lazysizes'
end

gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use Unicorn as the app server
gem 'unicorn-rails'
gem 'quiet_assets'

# file upload + qrcode
gem 'config-parser'

group :development do
  gem 'byebug'
  gem 'awesome_print'
end

group :development, :test do
  gem 'rubocop', require: false
end

group :development, :production do
  # gpio, architecture + root dependant -> do not include in test
  gem 'pi_piper', require: false
end

group :test do
  gem 'rspec-rails'
  gem 'capybara'
  gem 'simplecov'
  gem 'coveralls', require: false
end
