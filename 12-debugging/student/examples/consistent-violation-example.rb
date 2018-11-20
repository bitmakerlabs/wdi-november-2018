def add(amount)
  puts "adding #{amount} to count"
  @count += amount
end

def subtract(number)
  puts "subtracting #{number} from count"
  @count -= number
end

puts 'Setting count to 0'
@count = 0

num = 5

add(3)
add(num)
subtract(2)

puts "Final Count:"
puts @count
