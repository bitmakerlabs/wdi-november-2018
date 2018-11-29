require 'sinatra'

get '/' do
  redirect to('/recipes')
end

get '/about' do
  @title = 'About Us'
  erb :about
end

get '/contact' do
  @title = 'Contact Us'
  erb :contact
end

get '/legal' do
  @title = 'Legal Stuff'
  erb :legal
end

get '/recipes' do
  @title = 'Recipes'

  # Notice that the keys are integers
  @recipes = {
    1 => 'Avocado Sushi',
    2 => 'BBQ Ribs',
    3 => 'Gluten-Free Cookies'
  }

  erb :recipes
end
