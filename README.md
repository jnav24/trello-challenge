Trello.com Developer Challenge Solution
=======================================

A friend of mine attended the Android Developer Conference in San Francisco this year and told me about this challenge that happened there. He challenged me to find a solution and I took it upon myself to do it in Sass because I felt it to be more challenging.

The Challenge
-------------

Find an 8 letter string of characters that contains only letters from

	acdegilmnoprstuw

such that the hash(the_string) is

	25180466553932

if hash is defined by the following pseudo-code:

	Int64 hash (String s) {
    	Int64 h = 7
	    String letters = "acdegilmnoprstuw"
    	for(Int32 i = 0; i < s.length; i++) {
	        h = (h * 37 + letters.indexOf(s[i]))
    	}
	    return h
	}

For example, if we were trying to find the 7 letter string where hash(the_string) was 680131659347, the answer would be "leepadg".)