package util

import "io/ioutil"

func StringLength(s string) int {
	return len(s)
}

func WriteFile(text string) {
	ioutil.WriteFile("text.txt", []byte(text), 0644)
}
