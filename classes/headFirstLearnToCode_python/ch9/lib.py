
#use python's built in open function. The parameteres are the file and the mode. r for read and w for write.
my_file = open('lib.txt', 'r') 
#use the file object's read method to read all of the file
my_text = my_file.read()
print(my_text)

#close the file
my_file.close()