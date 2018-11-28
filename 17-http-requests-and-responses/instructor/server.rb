require 'sinatra'

# ROUTE =
# 1. HTTP Verb +
# 2. Path

get '/' do
  "Homepage"
end

get '/hello' do
  "Hello Dave"
end

get '/greetings' do
  redirect to('/hello')
end

get '/goodbye' do
  "Hello Dave"
end

get '/todo_list' do
  @current_time = Time.now

  @todo_list = [
    'Feed Cora',
    'Go to the gym',
    'Finish HTML & CSS homework',
    'Eat lunch'
  ]

  # MUST BE THE LAST LINE!
  #send_file 'views/todo_list.html'

  erb :todo_list
end
