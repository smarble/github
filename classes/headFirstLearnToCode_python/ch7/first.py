def difference_max_min(lst):
  max = -999999
  min = 999999
  for i in lst:
    print(max)  
    if i > max:
        max = i

  print('break')  

  for i in lst:
    print(min)  
    if i < min:
        min = i	
        			
    return max - min		

print(difference_max_min([1, 2, 3, 4, 5, 10, 2, 5]))