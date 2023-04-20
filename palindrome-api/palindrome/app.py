import json
import boto3


def palindrome_lambda_handler(event, context):
    is_palindrome = "there was no word"
    if event.get('queryStringParameters'):
        if event.get('queryStringParameters').get('word'):
            word = event['queryStringParameters']['word']
            is_palindrome = word == word[::-1]

    return {
        "statusCode": 200,
        "body": json.dumps({
            "isPalindrome": is_palindrome,
        })
    }
