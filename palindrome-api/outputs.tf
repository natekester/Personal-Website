output "api_gateway_invoke_url" {
  value = aws_api_gateway_stage.api_stage.invoke_url
}

output "aws_bucket_name" {
  value = aws_s3_bucket.public_bucket.bucket
}


output "check_CORS_OPERATION" {
  value = "curl -v -X OPTIONS ${aws_api_gateway_stage.api_stage.invoke_url}/${aws_api_gateway_resource.resource.path_part}"
}
output "test_api_gateway_up" {
  value = " pytest palindrome-api/tests/integration/test_api_gateway.py"
}
