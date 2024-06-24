function findLongestPalindrome(s: string): string {
    if (s.length < 2) return s;
  
    let start = 0, end = 0;
  
    for (let i = 0; i < s.length; i++) {
      const len1 = expandAroundCenter(s, i, i);
      const len2 = expandAroundCenter(s, i, i + 1);
      const len = Math.max(len1, len2);
  
      if (len > end - start) {
        start = i - Math.floor((len - 1) / 2);
        end = i + Math.floor(len / 2);
      }
    }
}
  