def math(function)
  if function == 'add'
    puts 'adding one to count'
    @count += 1
  elsif function == 'subtract'
    puts 'subtracting one from count'
    @count -= 1
  end

end

puts 'Setting count to 0'
@count = 0

math('add')
math('add')
math('subtract')

puts "Final Count:"
puts @count

