require 'pry'

def add_one
  puts 'adding one to count'
  @count += 1
end

def subtract_one
  puts 'subtracting one from count'
  @count -= 1
end

puts 'Setting count to 0'
@count = 0

add_one

binding.pry
add_one
subtract_one

puts "Final Count:"
puts @count

