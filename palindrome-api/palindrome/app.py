import json
import boto3

# Create a DynamoDB client or resource
dynamodb = boto3.resource('dynamodb')

# Reference your table
table = dynamodb.Table('palindrome')



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
            "headers": {"Access-Control-Allow-Origin": "https://natekester.com"},
        }

    flipped_word = word[::-1]
    is_palindrome = word == flipped_word


    # Define the key of the item you want to get
    key = {'Palindrome': word}  # Replace 'racecar' with the actual palindrome string

    count = 0
    # Get the item
    if is_palindrome:
        response = table.get_item(Key=key)
        item = response.get('Item',None)
        if item is not None:
            count = item.get('Count')
            table.update_item(
                Key=key,
                UpdateExpression='SET #cnt = :val',
                ExpressionAttributeNames={ '#cnt': 'Count'},
                ExpressionAttributeValues={':val':  count + 1 },
                )
        else:
            table.put_item(
                Item={
                    "Palindrome": word,
                    "Count": 1
                }
            )

    
    return {
        "statusCode": 200,
        "body": json.dumps(
            {
                "isPalindrome": is_palindrome,
                "count": str(count + 1)
            }
        ),
        "headers": {"Access-Control-Allow-Origin": "https://natekester.com"},
    }
