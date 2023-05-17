Using playwrite to test my page content.
how to record new UI tests:

$ python3 -m playwright codegen https://natekester.com

click all the important things that you want to test.

I have it in headless, but if it's important for you to see what is going on, turn that to false in the test.

to run, simply do:

$ pytest
