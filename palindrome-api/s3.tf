resource "random_uuid" "random_id" {}

resource "aws_s3_bucket" "public_bucket" {
  bucket        = "my-bucket-${random_uuid.random_id.id}"
  force_destroy = true

}

# resource "aws_s3_bucket_acl" "public_bucket" {
#   bucket = aws_s3_bucket.public_bucket.id
#   acl    = "private"
# }

