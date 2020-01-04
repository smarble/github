
#use python's built in open function. The parameteres are the file and the mode. r for read and w for write.
my_file = open('lib.txt', 'r') 

#use the file object's read method to read all of the file
line1 = my_file.readline()
print(line1)

#use the file object's read method to read all of the file
line2 = my_file.readline()
print(line2)

print('\t Here is how to print many lines: \n x \n x\n')

#close the file
my_file.close()