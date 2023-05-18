import json

import pytest

from palindrome import app
from tests.unit.lambda_message import LAMBDA_MESSAGE


@pytest.fixture()
def lambda_message_palindrome_false():
    return {
        **LAMBDA_MESSAGE,
        "queryStringParameters": {"word": "not a palindrome"},
    }


@pytest.fixture()
def lambda_message_palindrome():
    return {
        **LAMBDA_MESSAGE,
        "queryStringParameters": {"word": "racecar"},
    }


def test_not_palindrome(lambda_message_palindrome_false):
    res = app.palindrome_lambda_handler(lambda_message_palindrome_false, "")
    data = json.loads(res["body"])

    assert res["statusCode"] == 200
    assert "isPalindrome" in res["body"]
    assert data["isPalindrome"] == False


def test_palindrome(lambda_message_palindrome):
    res = app.palindrome_lambda_handler(lambda_message_palindrome, "")
    data = json.loads(res["body"])

    assert res["statusCode"] == 200
    assert "isPalindrome" in res["body"]
    assert data["isPalindrome"] == True
