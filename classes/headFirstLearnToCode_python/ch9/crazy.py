def make_crazy_lib(filename):
    #use python's built in open function. The parameteres are the file and the mode. r for read and w for write.
    file = open(filename, 'r')

    #use this variable to build up the text as we process it
    text = ''

    #for each line in the file, process it with the process_line function and then add it to the text we are building up in the text variable
    for line in file:
        text = text + process_line(line)

    file.close()

    return text

#global list of placeholder words
placeholders = ['NOUN', 'ADJECTIVE', 'VERB_ING', 'VERB']

#for testing, return the text we pass it. That way we can test that all the file reading and string concatenation is working correctly in make_crazy_lib.
def process_line(line):
    global placeholders
    processed_line = ''
    words = line.split()

    for word in words:
        #strip the word of puntuation. Now we have two versions for each iteration: word and stripped.
        stripped = word.strip('.,;?!')
        #check if stripped is in the placeholders list.
        if stripped in placeholders:
            #if yes, prompt the user to enter stripped (VERB, NOUN, etc...) and save it as the answer.
            answer = input('Enter a ' + stripped + ':')
            #add the answer to the processed_line variable with a space so the next word has a space before it. 
            processed_line = processed_line + answer

            #if the original word ends in a punctuation, add the puncuation back with a space after.
            if word[-1] in '.,;?!':
                processed_line = processed_line + word[-1] + ' '
            #if not, add the word as is to the processed_line variable with a space after. 
            else:
                processed_line = processed_line + ' '

        #else if stripped is not in placeholders:
        else:
            processed_line = processed_line + word + ' '

    #put a newline back on the line because split()removed them.
    return processed_line + '\n'

#function to call the make_crazy_lib function. Make sure 'lib.txt' is in the same directory.
def main():
    lib = make_crazy_lib('lib.txt')
    print(lib)

#test to see if this code is the main program (in this document), not from an imported module. If this is the main program, run the main function.
if __name__ == '__main__':
    main()


