class Person

    def initialize(firstname,lastname)
        @firstname = firstname
        @lastname = lastname
    end

    def fullname
        "#{@firstname} #{@lastname}"
    end
end


# sam = Person.new("Sammy", "Rolls")

# p sam