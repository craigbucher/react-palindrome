function CheckPalindrome(props) {
    const { palindrome } = props

    const TestPalindrome = (word) => {
        const regex = /[^A-Za-z]/g;
        let palindrome = false;
        let str = word.toLowerCase()

        if (str !== (str.replace(regex, ''))) { return false }

        for (let i = 0; i < str.length; i++) {
            let j = str.length - (i + 1);
            if (str[i] == str[j]) {
                palindrome = true;
            } else {
                palindrome = false;
                break;
            }
        }

        return palindrome
    }

    if (palindrome.length > 0) {
        if (palindrome.length === 1) {
            return 'False'
        }
        else if (TestPalindrome(palindrome)) {
            return 'True'
        } else {
            return 'False'
        }
    }
}

export default CheckPalindrome