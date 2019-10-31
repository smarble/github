#make an array of scores. the index will correspond to the 'solution #'.
scores = [60, 50, 60, 58, 54, 54,
          58, 50, 52, 54, 48, 69, 
          34, 55, 51, 52, 44, 51, 
          69, 64, 66, 55, 52, 61, 
          46, 31, 57, 52, 44, 18, 
          41, 53, 55, 61, 51, 44]

#array of costs. this is a parallel array to 'scores' (their indexes match)
costs = [.25, .27, .25, .25, .25, .25, 
         .33, .31, .25, .29, .27, .22, 
         .31, .25, .25, .33, .21, .25, 
         .25, .25, .28, .25, .24, .22, 
         .20, .25, .30, .25, .24, .25, 
         .25, .25, .27, .25, .26, .29]

#find out what the highest score is. 
#print all the indexnumbers of solutions along with their score. 
high_score = 0
length = len(scores)
for i in range(length):
    print('Bubble solution #' + str(i), 'score:', scores[i])
    if scores[i] > high_score:
        high_score = scores[i]

#print how many tests there are in total and the highest score
print('Bubbles tests:', length)   
print('Highest bubble score:', high_score) 

#make an array of all the tests with the highest score. Print.
best_solutions= []
for i in range(length):
    if high_score == scores[i]:
        best_solutions.append(i)

#print 'Solutions with highest score: (x, x, etc...)'
print('Solutions with the highest score:', best_solutions)

#task: take the bubble solutions with the highest score (60) and choose the lowest cost one.


#loop through the scores array and pick up the items that have match the highest score
#make the 'cost' variable a float to match the items in the 'costs' array.
cost = 100.0
#holds the index of the most cost effective solution
most_effective = 0

for i in range(len(best_solutions)):
    index = best_solutions[i]
    if cost > costs[index]:
        most_effective = index
        cost = costs[index]

#alternate solution that does not utilize the "best_solutions" that I have already identified.
# for i in range(length):
#     if scores[i] == high_score and costs[i] < cost:
#         most_effective = i
#         cost = costs[i]

print('Solution #', most_effective, 'is the most effective, with a cost of', costs[most_effective])	


