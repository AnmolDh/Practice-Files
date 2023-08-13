alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
alphabet.extend(alphabet)

direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
text = input("Type your message:\n").lower()
shift = int(input("Type the shift number:\n"))

# def encrypt(text, shift):
#     encrypted_text = ""
#     for letter in text:
#         i = alphabet.index(letter)
#         encrypted_text += alphabet[i + shift]
#     print(encrypted_text)

# def decrypt(text, shift):
#     decrypted_text = ""
#     for letter in text:
#         i = alphabet.index(letter)
#         decrypted_text += alphabet[i - shift]
#     print(decrypted_text)

# if direction.lower() == "encode":
#     encrypt(text, shift)
# else:
#     decrypt(text, shift)


def caesar(text, shift, dir):
    end_text = ""
    if dir == "decode":
        shift *= -1
    for letter in text:
        i = alphabet.index(letter)
        end_text += alphabet[i + shift]
    print(end_text)


caesar(text, shift, direction)
