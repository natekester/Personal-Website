import json
import boto3


def palindrome_lambda_handler(event, context):
    # if the request is malformed - send 400
    try:
        word = event["queryStringParameters"]["word"]
        if not isinstance(word, str):
            raise
        if len(word) > 19:
            raise

    except:
        return {
            "statusCode": 400,
            "body": json.dumps(
                {
                    "message": "you must send the 'word' query parameter with less than 20 characters",
                }
            ),
        }

    flipped_word = word[::-1]
    is_palindrome = word == flipped_word

    return {
        "statusCode": 200,
        "body": json.dumps(
            {
                "isPalindrome": is_palindrome,
            }
        ),
    }
