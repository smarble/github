def count_sentences(text):
    count = 0
    terminals = '.:?!'

    for char in text:
        #print(character)
        if char in terminals:
            count = count + 1
            print(count)
            
    return count   


    def count_sentences(text):
    count = 0

    for character in text:
        #print(character)
        if character == '.' or character == '?' or character == ',' or character == ';' or character == '!':
            count = count + 1
            print(count)
    return count   
