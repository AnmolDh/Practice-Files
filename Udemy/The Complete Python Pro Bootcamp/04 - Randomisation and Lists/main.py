import random

# random
# print(random.randint(0, 6))
# print(random.random())
# print(random.random() * 6)

# ran = random.randint(0, 1)
# if ran == 0:
#   print("Tails")
# else:
#   print("Heads")



# lists
# states_of_india = ["haryana", "punjab", "himachal", "rajasthan"]
# print(states_of_india[0])
# states_of_india[3] = "UP"
# states_of_india.append("J&K")
# states_of_india.extend(["UK", "Gujarat"])
# print(states_of_india)


# random and lists
# names_string = input("Give me everybody's names, separated by a comma. ")
# names = names_string.split(", ")
# random_num = random.randint(0, len(names)-1)
# print(f"{names[random_num]} is going to buy the meal today!")


# nested list 
# fruits = ["mango", "orange", "kiwi"]
# vegetables = ["Potato", "Tomato"]
# nested = [fruits, vegetables]
# print(nested)

# row1 = ["⬜️","️⬜️","️⬜️"]
# row2 = ["⬜️","⬜️","️⬜️"]
# row3 = ["⬜️️","⬜️️","⬜️️"]
# map = [row1, row2, row3]
# print(f"{row1}\n{row2}\n{row3}")
# position = input("Where do you want to put the treasure? ")
# col = int(position[0])
# row = int(position[1])
# map[row - 1][col - 1] = "X"
# print(f"{row1}\n{row2}\n{row3}")



# rock paper scissor
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

game_images = [rock, paper, scissors]

user_choice = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))
print(game_images[user_choice])

computer_choice = random.randint(0, 2)
print("Computer chose:")
print(game_images[computer_choice])

if user_choice >= 3 or user_choice < 0: 
  print("You typed an invalid number, you lose!") 
elif user_choice == 0 and computer_choice == 2:
  print("You win!")
elif computer_choice == 0 and user_choice == 2:
  print("You lose")
elif computer_choice > user_choice:
  print("You lose")
elif user_choice > computer_choice:
  print("You win!")
elif computer_choice == user_choice:
  print("It's a draw")