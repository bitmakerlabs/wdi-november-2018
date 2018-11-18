class Counter

  def initialize
    @start = 0
    @count = @start
  end

  def add_one
    @count += 1
  end

  def subtract_one
    @count -= 1
  end

end

counter = Counter.new
counter.add_one
counter.add_one
counter.add_one
counter.add_one
counter.subtract_one


puts "puts counter:"
puts counter
puts

puts "puts counter.inspect:"
puts counter.inspect
puts

puts "p counter:"
p counter
puts

# What p might look like under the hood:

def what_p_might_be(object)
  puts object.inspect
end


puts "what_p_might_be(counter):"
what_p_might_be(counter)
