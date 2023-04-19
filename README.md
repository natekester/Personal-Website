# Welcome to my personal website!

I've included my yarn.lock and .nvmrc to make it easy to pull down and run if you so chose. That is in the UI folder - i.e. the react portion of the website.

I've added a personal-website-api folder for my lambda setup. It's pretty simple at the moment. Just an api-gateway with lambda that takes a get of /ispalindrome?word=wordToTest and responds with a json object with value of true or false.
