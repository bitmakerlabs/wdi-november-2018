
puts "What is happening here?"
# puts("What is happening here?", arg2, arg3)

puts "Hello, Sarah!"
puts "Hello, Mike!"
puts "Hello, Santa!"

puts '------'

def greet(name)
  puts "Hello, #{name}! Welcome!"
  # more stuff here ...
end

# puts "Please enter your name:"
# name = gets.chomp
# greet(name)

greet(6)
greet('Mike')
greet('Santa')




# name of the method
# what arguments it takes
# what it does
  # ACTUALLY, what it gives back

puts '------'
name = 'Sarah'
def greet
  puts "Hello, #{name}! Welcome!"
end
#
# greet()
# greet()
# greet()


def add(number1, number2)
  # return "Happy"
  return number1 + number2
  return 'happy'
end

# new_number = add(3, 5)
# puts new_number.inspect
#
# puts '------'
#
#
# def get_breathe_fire
#   puts "~~~~~~^^^^"
# end
#
# puts "Dragon breathing fire: #{get_breathe_fire}!! Look out!!"


# "Dragon breathing fire: ~~~~~~^^^^!! Look out!"
puts "\n\n-------\n\n"

def buy_cats(num_cats)
  if num_cats == 1
    return "^_^"
  end

  puts "You are allowed to buy at most 2 cats."
  return "^_^   ^_^"
end

my_cat = buy_cats(1)
puts my_cat

puts '  -----  '

my_cats = buy_cats(2)
puts my_cats



puts "\n\n\n----------------\n\n\n"

def make_burger(want_lettuce)
  burger = "\n\n"
  burger += "  ---  "
  burger += "\n" + add_toppings
  if want_lettuce
    burger += "\n ~~~~~ "
  end
  burger += "\n ===== "
  burger += "\n  ---  "
  return burger
end

def add_toppings
  toppings = ""
  # ketchup
  toppings += ' *** * '
  # cheese
  toppings += "\n _____ "
  return toppings
end


puts make_burger(false)
puts make_burger(true)

# puts add_toppings
