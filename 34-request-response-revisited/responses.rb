# Standard library that makes HTTP requests from Ruby
require 'httparty'

# requesting HTML (default)
response = HTTParty.get('http://localhost:3000/monsters')
puts response.body

# requestiong plain text
response = HTTParty.get('http://localhost:3000/monsters.text')
puts response.body

# requesting JSON
response = HTTParty.get('http://localhost:3000/monsters.json')
# response.body is still a string - let's convert it to an array of hashes
json_data = JSON.parse(response.body)
# now we can do anything!
json_data.each do |monster_hash|
  #...
end
