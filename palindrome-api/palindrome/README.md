The dockerfile is for local development:

$ docker build -t palindrome <path-to-dockerfile>  
$ docker run -p 9000:8080 palindrome

if you want to test if it's up
$ curl "http://localhost:9000/2015-03-31/functions/function/invocations" -H 'Content-Type: application/json' -d '{"queryStringParameters":{"word":"word drow"}}'

