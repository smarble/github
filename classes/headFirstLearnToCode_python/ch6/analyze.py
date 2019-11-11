import ch1text
print('test: loaded')                                                                                                 
# from . import ch1text

#################### 
#takes a list of words and counts the syllables
#################### 
def count_syllables(words):
    count = 0

    #iterate over every word in our words list
    for word in words:   
        #word_count stores the returned syllable count from each word
        word_count = count_syllables_in_word(word)
        count = count + word_count

    return count    

def count_syllables_in_word(word):
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

#################### 
#takes a string of text and counts the sentences
#################### 
def count_sentences(text):
    count = 0
    terminals = '.;?!'

    for char in text:
        if char in terminals:
            count = count + 1
            print('Sentence count: ', count)

    return count  

#################### 
#chooses and prints out the results using the readability score we generate
#################### 
def output_results (score):
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
  
#################### 
#takes a string of text and computes a readability score based upon words, sentences, and syllables.
#################### 
def compute_readibility(text):
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

compute_readibility(ch1text.text)

