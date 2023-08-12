# for loop
fruits = ["apple", "mango", "peach"]
for fruit in fruits:
  print(fruit)


# average height
student_heights = input("Input a list of student heights ").split()
for n in range(0, len(student_heights)):
  student_heights[n] = int(student_heights[n])
sum = 0
for i in student_heights:
  sum += i
print(round(sum/len(student_heights)))


# highest score
student_scores = input("Input a list of student scores ").split()
for n in range(0, len(student_scores)):
  student_scores[n] = int(student_scores[n])
print(student_scores)
max = student_scores[0]
for score in student_scores:
  if (max < score):
    max = score
  else:
    continue
print(f"The highest score in the class is: {max}")


# range
import random
for number in range(2, 21, 2):
  print(number)

total = 0
for number in range(1, 101):
  total += number
print(total)

total = 0
for number in range(2, 101, 2):
  total += number
print(total)


# FizzBuzz
for number in range(1, 101):
  if number % 3 == 0 and number % 5 == 0:
    print("FizzBuzz")
  elif number % 3 == 0:
    print("Fizz")
  elif number % 5 == 0:
    print("Buzz")
  else:
    print(number)


# Password Generator
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
           'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
nr_letters = int(input("How many letters would you like in your password?\n"))
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))

# Eazy Level - Order not randomised:
# e.g. 4 letter, 2 symbol, 2 number = JduE&!91


password = ""

for x in range(0, nr_letters):
    r = random.randint(0, len(letters) - 1)
    password += letters[r]

for x in range(0, nr_symbols):
    r = random.randint(0, len(symbols) - 1)
    password += symbols[r]

for x in range(0, nr_numbers):
    r = random.randint(0, len(numbers) - 1)
    password += numbers[r]

print(password)


# Hard Level - Order of characters randomised:
# e.g. 4 letter, 2 symbol, 2 number = g^2jk8&P


password = ""
password_list = []

for char in range(0, nr_letters):
  password_list.append(random.choice(letters))

for char in range(0, nr_symbols):
  password_list.append(random.choice(numbers))

for char in range(0, nr_numbers):
  password_list.append(random.choice(symbols))

random.shuffle(password_list)

for i in password_list:
  password += i

print(password)
