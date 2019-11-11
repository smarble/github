'''The analyze module uses the Flesch-Kincaid readability test to analyze text and produce a readability score. This score is then converted into a grade-based readability category.'''

print('test')

def count_syllables(words):
    '''This function takes a list of words and returns a total count of syllables across all words in the list.'''
    count = 0

    #iterate over every word in our words list
    for word in words:   
        #word_count stores the returned syllable count from each word
        word_count = count_syllables_in_word(word)
        count = count + word_count

    return count    


def count_syllables_in_word(word):
    '''This function takes a word in the form of a string and returns the number of syllables. Note this function is a heuristic and may not be 100% accurate.'''
    count = 0
    #remove punctuation from word (to easier isolate vowels at the end of each word)
    endings = '.,;!?:'
    last_char =  word[-1]

    if last_char in endings:
        processed_word = word[0:-1]
    else:
        processed_word = word    

    #if a word is 3 or less characters, count as 1 syllable
    if len(processed_word) <= 3:
        return 1

    #remove the silent e at the end of a word 
    if processed_word[-1] in 'eE':
        processed_word = processed_word[0:-1]    
    
    #count each vowel in a word as a syllable
    # (keep in mind silent e's have been removed and the previous charachter must not have been another vowel)
    vowels = 'aeiouAEIOU'
    prev_char_was_vowel = False

    for char in processed_word:
        if char in vowels:
            if not prev_char_was_vowel:
                count = count + 1
                prev_char_was_vowel = True
        else: 
            prev_char_was_vowel = False

    #if the word ends in y or Y, increase the syllable count
    if processed_word[-1] in 'yY':
        count = count + 1 

    return count            


def count_sentences(text):
    '''This function counts the number of sentences in a string of text using .;?! as terminals.'''    
    count = 0
    terminals = '.;?!'

    for char in text:
        if char in terminals:
            count = count + 1
            print('Sentence count: ', count)

    return count  


def output_results (score):
    '''This function takes a Flesch-Kincaid score and prints the corresponding reading level.'''    
    if score >= 90.0:
        print('Reading level of 5th Grade')
    elif score >= 80.0:
        print('Reading level of 6th Grade')
    elif score >= 70.0:
        print('Reading level of 7th Grade') 
    elif score >= 60.0:
        print('Reading level of 8-9th Grade')   
    elif score >= 50.0:
        print('Reading level of 10-12th Grade')   
    elif score >= 30.0:
        print('Reading level of College Student')   
    else:
        print('Reading level of College Graduate')                 
  

def compute_readibility(text):
    '''This function takes a string of any length and prints out a grade-based readability score based on words, sentences, and syllables'''    
    total_words = 0
    total_sentences = 0
    total_syllables = 0
    score = 0

    words = text.split()
    total_words = len(words)
    total_sentences = count_sentences(text)
    total_syllables = count_syllables(words)
   
    score = (206.835 - 1.015 * (total_words / total_sentences)
            -84.6 * (total_syllables / total_words))

    print(total_words, 'words')
    print(total_sentences, 'sentences')
    print(total_syllables, 'syllables')
    print(score, 'reading ease score') 
    output_results(score)        


#Call the compute_readibility function if this is the main program, not if this is an imported module. Run if the global variable name is __main__. 
if __name__ == '__main__':
    import ch1text
    print('Chapter1 Text:')
    compute_readibility(ch1text.text)