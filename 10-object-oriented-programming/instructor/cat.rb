class Cat

  # Special method -- hooks into .new
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name  = last_name

    @hungry = true
  end

  # Reader
  def first_name
    return @first_name
  end

  # Reader
  def last_name
    return @last_name
  end

  # Writer
  def first_name=(first_name)
    @first_name = first_name
  end

  # Writer
  def last_name=(last_name)
    @last_name = last_name
  end

  def full_name
    return "#{ @first_name } #{ last_name }"
  end

  def greetings
    return "Hello, my name is #{ full_name }"
  end

  def meow
    return "Meeeeow"
  end

  def eat
    if @hungry
      # do the eat
      @hungry = false
      return "Yum"
    else
      "*** Walks Away ***"
    end
  end

end
