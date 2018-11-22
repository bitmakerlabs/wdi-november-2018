require_relative "student"
require_relative "professor"
require_relative "magicDepartment"

stewie = Student.new("Stewie","Griffin")
meg = Student.new("Meg","Griffin")
louis = Student.new("Louis","Griffin")

students = []
students << stewie
students << meg
students << louis


snape = MagicDepartment.new("Serverus","Snape")

p snape.herbology


# # # p stewie
# snape.teach(stewie)
# snape.teach(stewie)
# snape.teach(stewie)

# p stewie

# # snape.teachCohort(students)


# # p students


