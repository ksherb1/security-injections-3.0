vals = [None]*10
count = int(input("How many values should be stored in the array?"))
for i in range(0, count):
    vals[i] = count-i
which = int(input("Which value do you wish to retrieve? "))
print('Your value is', str(vals[which]))