data "archive_file" "python_lambda_package" {
  type        = "zip"
  source_file = "${path.module}/palindrome/app.py"
  output_path = "lambda.zip"
}

resource "aws_lambda_function" "palindrome_lambda" {
  function_name = var.project_name

  filename         = "lambda.zip"
  source_code_hash = data.archive_file.python_lambda_package.output_base64sha256

  runtime = "python3.9"
  handler = "app.palindrome_lambda_handler"

  role = aws_iam_role.role.arn

  //minimum you can set timeout is 1 second...
  timeout = 1

  environment {
    variables = {
      S3_BUCKET = aws_s3_bucket.public_bucket.bucket
      S3_REGION = var.region
    }
  }


}
