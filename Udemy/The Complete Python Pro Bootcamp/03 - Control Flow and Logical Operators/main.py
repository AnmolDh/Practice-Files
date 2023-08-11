# ticket price
print("Welcome to the rollercoaster")
height = int(input("What was your height in cm? "))
if height >= 120:
  print("You can ride")
  age = int(input("What is your age? "))
  if age < 12:
    print("Please pay $5")
  elif age <= 18:
    print("Please pay $7")
  else:
    print("Please pay $12")
else:
  print("You cannot ride, shawty")


# even odd
number = int(input("Which number do you want to check? "))
if number % 2 == 0:
  print("This is an even number.")
else:
  print("This is an odd number.")


# bmi calc
height = float(input("enter your height in m: "))
weight = float(input("enter your weight in kg: "))
bmi = weight / (height**2)

if bmi < 18.5:
  print(f"Your BMI is {round(bmi)}, you are underweight")
elif bmi < 25:
  print(f"Your BMI is {round(bmi)}, you have a normal weight")
elif bmi < 30:
  print(f"Your BMI is {round(bmi)}, you are slightly overweight")
elif bmi < 35:
  print(f"Your BMI is {round(bmi)}, you are obese")
else:
  print(f"Your BMI is {round(bmi)}, you are clinically obese")


# leap year
year = int(input("Which year do you want to check? "))
if year % 4 == 0:
  if year % 100 == 0:
    if year % 400 == 0:
      print("Leap year.")
    else:
      print("Not leap year.")
  else:
    print("Leap year.")
else:
  print("Not leap year.")


# pizza order
print("Welcome to Python Pizza Deliveries!")
size = input("What size pizza do you want? S, M, or L ")
add_pepperoni = input("Do you want pepperoni? Y or N ")
extra_cheese = input("Do you want extra cheese? Y or N ")

bill = 0

if size == "S":
  bill += 15
elif size == "M":
  bill += 20
else:
  bill += 25

if add_pepperoni == "Y":
  if size == "S":
    bill += 2
  else:
    bill += 3

if extra_cheese == "Y":
  bill += 1

print(f"Your final bill is: ${bill}")


# love calculator

print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")

name = name1 + name2

t = name.lower().count("t")
r = name.lower().count("r")
u = name.lower().count("u")
e = name.lower().count("e")
first = t + r + u + e

l = name.lower().count("l")
o = name.lower().count("o")
v = name.lower().count("v")
e = name.lower().count("e")
second = l + o + v + e

total = str(first) + str(second)
total = int(total)

if total < 10 or total > 90:
  print(f"Your score is {total}, you go together like coke and mentos.")
elif total > 40 and total < 50:
  print(f"Your score is {total}, you are alright together.")
else:
  print(f"Your score is {total}.")



# treasure game
print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
''')

print("Welcome to Treasure Island.")
print("Your mission is to find the treasure.")

choice1 = input(
    'You\'re at a cross road. Where do you want to go? Type "left" or "right" \n').lower()
if choice1 == "left":
  choice2 = input(
      'You\'ve come to a lake. There is an island in the middle of the lake. Type "wait" to wait for a boat. Type "swim" to swim across. \n').lower()
  if choice2 == "wait":
    choice3 = input(
        "You arrive at the island unharmed. There is a house with 3 doors. One red, one yellow and one blue. Which colour do you choose? \n").lower()
    if choice3 == "red":
      print("It's a room full of fire. Game Over.")
    elif choice3 == "yellow":
      print("You found the treasure! You Win!")
    elif choice3 == "blue":
      print("You enter a room of beasts. Game Over.")
    else:
      print("You chose a door that doesn't exist. Game Over.")
  else:
    print("You get attacked by an angry trout. Game Over.")
else:
  print("You fell into a hole. Game Over.")
