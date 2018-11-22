require_relative 'person'

class Student < Person

    Lev = 0
    def initialize(f,l)
        super(f,l)
        @knowledge_level = Lev
    end

    def fullname
        "Student Name:::#{super}"
    end

    def learn
        @knowledge_level = @knowledge_level + 10
        if @knowledge_level > 20
            bonus
        end
    end

    def slack
        @knowledge_level = @knowledge_level - 5
    end

    private
    def bonus
        @knowledge_level = @knowledge_level +20
    end

end