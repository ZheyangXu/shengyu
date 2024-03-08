package main

func twoSum(nums []int, target int) []int {
	hash := make(map[int]int)
    ans := []int{0, 0}
    for i, num := range nums {
        num1, ok := hash[target - num]
        if ok {
            ans[0] = num1
            ans[1] = i 
            return ans
        } else {
            hash[num] = i
        }
    }
    return ans
}
