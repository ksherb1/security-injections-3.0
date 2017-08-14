def check_input(min, max):
    prompt = "Enter an integer number between %d and %d: " % (min, max)
    value = int(input(prompt))
    while (value < min or value > max):
        value = int(input(prompt))
    return value