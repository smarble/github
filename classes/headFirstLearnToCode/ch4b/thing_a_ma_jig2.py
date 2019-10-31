characters = 'taco'

output = ''
length = len(characters)
i = 0
while (i < length):
    output = output + characters[i]
    print(output)
    i = i + 1

print('end of first while loop')    
length = length * -1 #changes the number to a negative   
i = -2

while (i >= length):
    output = output + characters[i]
    i = i -1
    print(output)


print('Palindrome:' , output)    
