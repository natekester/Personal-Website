resource "aws_dynamodb_table" "basic-dynamodb-table" {
  name           = "palindrome_count"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "Palindrome"
  range_key      = "Count"

  attribute {
    name = "Palindrome"
    type = "S"
  }

  attribute {
    name = "Count"
    type = "N"
  }

  ttl {
    attribute_name = "TimeToExist"
    enabled        = true
  }

  tags = {
    Name        = "dynamodb-table-1"
    Environment = "production"
  }
}

resource "aws_dynamodb_table" "palindrome_table" {
  name           = "palindrome"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "Palindrome"

  attribute {
    name = "Palindrome"
    type = "S"
  }
  
  tags = {
    Name        = "dynamodb-table-2"
    Environment = "production"
  }
}