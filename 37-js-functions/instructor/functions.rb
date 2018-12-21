# Basics

# Write a method that takes someone's order

# Call the method


# Question:
# Can I assign it to a variable as a method? Why would I want to do this?


def do_stuff
  puts "Hello world!"
end

do_stuff

def get_car
  {
    gas: 100,
  }
end


number3 = 10
# puts multiply(3, 4)

value = def multiply(number1, number2)
  # number1 * number2
  # return number1 * number2 * number3 # doesn't work!
  return number1 * number2
end

puts multiply(3, 4)

# puts multiply(3)
puts value
