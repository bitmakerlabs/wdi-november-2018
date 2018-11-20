class Counter

  def initialize
    puts 'Setting count to 0'
    @count = 0
    process
  end

  def process
    add_one
    add_one
    subtact_one
    final
  end

  def add_one
    puts 'adding one to count'
    @count += 1
  end

  def subtract_one
    puts 'subtracting one from count'
    @count -= 1
  end

  def final
    puts "Final Count:"
    puts @count
  end

end

Counter.new
