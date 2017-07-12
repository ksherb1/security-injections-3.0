total = 0
print('Please enter 10 ages: ')
for i in range(10):
    age = int(input('Please enter age: '))
    total = total + age
print('average age is ',float(total)/10)