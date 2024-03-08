package main

import (
	"reflect"
	"testing"
)


func TestTwoSum(t *testing.T) {
	testCases := []struct{
		Name string
		Nums  []int
		Target int
		Expected []int
	}{
		{"test", []int{1, 2, 3, 4}, 7, []int{3, 4}},
	}
	for _, c := range testCases {
		t.Run(c.Name, func(t *testing.T) {
			if ans := twoSum(c.Nums, c.Target); reflect.DeepEqual(ans, c.Expected) {
				t.Fatalf("Error")
			}
		})
	}
}
