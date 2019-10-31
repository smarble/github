import ch1text
print('test: loaded')                                                                                                 
# from . import ch1text


#################### 
#takes a list of words and counts the syllables
#################### 
def count_syllables(words):
    count = 0
    
    #iterate over every word in our words list.
    for word in words:   
        #word_count stores the returned syllable count from each word
        word_count = count_syllables_in_word(word)
        count = count + word_count

    return count    

def count_syllables_in_word(word):
    count = 0

    #if a word is 3 or less characters, count 1 syllable
    if len(word) <= 3:
        return 1
    
    vowels = 'aeiouAEIOU'
    prev_char_was_vowel = False

    for char in word:
        if char in vowels:
            if not prev_char_was_vowel:
                count = count + 1
                prev_char_was_vowel = True
            else: 
                prev_char_was_vowel = False

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
#takes a list of words and counts the syllables
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
    print(total_words, 'words')
    print(total_sentences, 'sentences')
    print(total_syllables, 'syllables')

compute_readibility(ch1text.text)