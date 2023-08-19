import math


def greet():
  print("hello")
  print("hi")
  print("bye")


greet()


def greet_with_name(name):
  print(f"hi {name}")


greet_with_name("Anmol")


def greet_with(name, location):
  print(f"hello {name}")
  print(f"what is it like in {location}")


greet_with("Blah", "Sincity")  # positional args
greet_with(location="Sincity", name="Blah")  # keyword args


def paint_calc(height, width, cover):
  no_of_cans = (height * width) / cover
  print(f"You'll need {math.ceil(no_of_cans)} cans of paint.")


test_h = int(input("Height of wall: "))
test_w = int(input("Width of wall: "))
coverage = 5
paint_calc(height=test_h, width=test_w, cover=coverage)


def prime_checker(number):
  isPrime = True
  if n == 0 or n == 1:
    isPrime = True
  else:
    for i in range(2, number):
      if n % i == 0:
        isPrime = False
        break
  if isPrime:
    print("It's a prime number.")
  else:
    print("It's not a prime number")


n = int(input("Check this number: "))
prime_checker(number=n)
