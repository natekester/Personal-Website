output "api_gateway_invoke_url" {
  value = aws_api_gateway_stage.api_stage.invoke_url
}

output "aws_bucket_name" {
  value = aws_s3_bucket.public_bucket.bucket
}


output "project_trigger_command" {
  value = "curl -X ${aws_api_gateway_method.method.http_method} ${aws_api_gateway_stage.api_stage.invoke_url}/${aws_api_gateway_resource.resource.path_part}"
}
