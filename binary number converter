#function to convert binary numbers to regular numbers
def main_function(Input):
    sum = 0
    exp = 1
    for i in range(len(Input)-1, -1, -1):
        sum += int(Input[i])*exp
        exp*=2
        print(Input[i], '*', exp/2, '=', sum)
    return sum

main_function('101011')
