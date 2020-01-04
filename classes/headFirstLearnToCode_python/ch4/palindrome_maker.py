#palindromes: tacocat, madam, radar, kayak, a nut for a jar of tuna, a man a plan a canal panama

characters = ['t', 'a', 'c', 'o']

output = ''
length = len(characters)
i = 0
while (i < length):
    output = output + characters[i]
    print('characters[i]', characters[i])
    print('output', output)
    i = i + 1

length = length * -1
i = -2

while (i >= length):
    output = output + characters[i]
     print('characters[i]', characters[i])
    print('output', output)
    i = i - 1

print('Final output', output)    