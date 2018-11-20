def add(amount)
  puts "adding #{amount} to count"
  @count += amount
end

def subtract(amount)
  puts "subtracting #{amount} from count"
  @count -= amount
end

puts 'Setting count to 0'
@count = 0

amount = 5

add(3)
add(amount)
subtract(2)

puts "Final Count:"
puts @count
