require_relative "person"

class Professor < Person

    def initialize(f,l)
        super(f,l)
    end

    def teach(student)
        student.learn
    end

    def teachCohort(students)
        students.each{ |s| s.learn}
    end

end