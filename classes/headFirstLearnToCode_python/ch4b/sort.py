scores = [60, 50, 60, 58, 54, 54,
          58, 50, 52, 54, 48, 69, 
          34, 55, 51, 52, 44, 51, 
          69, 64, 66, 55, 52, 61, 
          46, 31, 57, 52, 44, 18, 
          41, 53, 55, 61, 51, 44]

#sort the scores list in ascending order using a 'bubble sort'. 
#compare each index to the next and swap if the first was bigger than the second. 
def bubble_sort(scores, numbers):
    swapped = True

    while swapped:
        swapped = False
        for i in range(0, len(scores)-1):
            if scores[i] < scores [i+1]:
                temp = scores[i]
                scores[i] = scores[i+1]
                scores[i+1] = temp
                #repeat the exact same swaps with the numbers list.
                temp = numbers[i]
                numbers[i] = numbers[i+1]
                numbers[i+1] = temp
                swapped = True


number_of_scores = len(scores)
solution_numbers = list(range(number_of_scores))


bubble_sort(scores, solution_numbers)
print(scores)

print('Top Bubble Solutions')
for i in range(0,5):
    print(str(i+1) + ')',
    'Bubble solution #' + str(solution_numbers[i]),
    'score:', scores[i])
