Using playwrite to test my page content.

I plan on breaking each recording out to individual bite sized tests - so as I change I can catch things breaking, but for now, I'm happy it catches lambda to UI errors.

how to record new E2E tests:

$ python3 -m playwright codegen https://natekester.com

click all the important things that you want to test.

I have it in headless, but if it's important for you to see what is going on, turn that to false in the test.

to run, simply do:

$ pytest

and it should pick up the lambda unit test as well.
