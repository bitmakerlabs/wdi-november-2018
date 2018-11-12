
# puts "Hello world"
#
# puts "Isn't this great?"


apples = 3

puts apples

apples = apples * 2
puts apples
apples = apples + 7
puts apples

apples = apples + 2
puts apples
apples += 2
puts apples

apples = "5 apples"
apples *= 5
# apples = apples * 5
puts apples

stuff_i_have = nil
puts stuff_i_have

weather_is_cold = true



puts weather_is_cold



# user_input = gets.chomp
# puts user_input.inspect
# puts '-------'
# puts user_input * 5


# apples_per_stand = gets.chomp.to_i
# # puts apples_per_stand.inspect
# num_apple_stands = 10
# total_apples = apples_per_stand * num_apple_stands
# puts "I have #{total_apples} apples total."
# puts "Don't you wish you had #{total_apples} apples?"


puts "\n\n----------\n\n"

temperature = 0

while temperature < 100
  puts "What's the current temperature? (type 'exit' to stop)"
  user_input = gets.chomp
  if user_input == 'exit'
    break
  end

  temperature = user_input.to_i
  if temperature < 10
    puts "Wear a coat!"
  elsif temperature < 20
    puts "Maybe wear a sweater?"
  else
    puts "You can wear shorts and tshirt."
  end
end

# weather_is_cold = true
# if weather_is_cold
#   puts "The weather is cold."
# end


# while true
#   puts "This is the song that never ends."
# end


if "Hello"
  puts "Hey everyone!"
end
