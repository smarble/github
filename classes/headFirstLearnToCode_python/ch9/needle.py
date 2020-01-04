#starting with a directory of 1000 files named o.txt through 999.txt. Find the file with the word needle in it.
for i in range(0, 1000):
    filename = str(i) + '.txt'
    file = open(filename, 'r')
    text = file.read()
    if 'needle' in text:
        print('Found needle in file ' + str(i) + '.txt')
        file.close()
        break
    else: 
        print('testing', (i))    

    file.close()

    