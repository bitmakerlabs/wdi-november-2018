class Car

  @@default_colour = 'blue'
  @@cars_made = 0

  def initialize(owner)
    @owner = owner
    @colour = @@default_colour
    @mileage = 0
    @broken = false

    @@cars_made += 1
  end

  # Class Reader
  def self.cars_made
    @@cars_made
  end

  # Class Writer
  def self.default_colour=(default_colour)
    @@default_colour = default_colour
  end

  # Reader
  def colour
    @colour
  end

  # Writer
  def colour=(colour)
    @colour = colour
  end

  def drive(distance)
    if !@broken
      @mileage += distance
    end
  end

  def crash(other_car = nil)
    @broken = true

    if other_car
      other_car.crash
    end
  end

end
