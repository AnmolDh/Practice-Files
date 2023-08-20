##########################################
# import turtle
# from turtle import Turtle, Screen

# timmy = Turtle()
# print(timmy)
# timmy.shape("turtle")
# timmy.color("DarkOliveGreen4")
# timmy.forward(100)

# my_screen = Screen()
# print(my_screen.canvheight)
# my_screen.exitonclick()



##########################################
# from prettytable import PrettyTable

# table = PrettyTable()

# table.add_column("Pokemon Name", ["Pikachu", "Squirtle", "Charmander"])
# table.add_column("Type", ["Electic", "Water", "Fire"])
# table.align = "l"
# print(table)





#########################################
# class User:
#     pass

# user_1 = User()
# user_1.id = "001"
# user_1.name = "Anmol"
# print(user_1.id, user_1.name)

# user_2 = User()
# user_2.id = "002"
# user_2.name = "Brah"
# print(user_2.id, user_2.name)


class User:
  def __init__(self, id, username):
    self.id = id
    self.username = username
    self.followers = 0
    self.following = 0

  def details(self):
    print(self.id, self.username, self.followers, self.following)

  def follow(self, user):
    user.followers += 1
    self.following += 1

user_3 = User("003", "HuhHuh")

user_4 = User("004", "popipopipoo")
user_4.follow(user_3)

user_3.details()
user_4.details()
