resource "aws_iam_instance_profile" "public_server" {
  name = "${var.project_name}-profile"
  role = aws_iam_role.role.name
}

resource "aws_iam_role" "role" {
  name               = "${var.project_name}-role"
  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json
}

data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type = "Service"
      identifiers = [
        "lambda.amazonaws.com",
        "s3.amazonaws.com",
        "apigateway.amazonaws.com",
      ]
    }
  }
}

resource "aws_iam_role_policy_attachment" "cloudwatch" {
  role       = aws_iam_role.role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonAPIGatewayPushToCloudWatchLogs"
}

# resource "aws_iam_role_policy_attachment" "lambda_ec2" {
#   role       = aws_iam_role.role.name
#   policy_arn = aws_iam_policy.lambda_ec2.arn
# }

# resource "aws_iam_policy" "lambda_ec2" {
#   name   = "${var.project_name}-lambda-ec2"
#   policy = data.aws_iam_policy_document.lambda_ec2.json
# }

# data "aws_iam_policy_document" "lambda_ec2" {
#   statement {
#     effect = "Allow"
#     actions = [
#       "ec2:CreateNetworkInterface",
#       "ec2:DescribeNetworkInterfaces",
#       "ec2:DeleteNetworkInterface",
#     ]
#     resources = ["*"]
#   }
# }

resource "aws_iam_role_policy_attachment" "lambda" {
  role       = aws_iam_role.role.name
  policy_arn = aws_iam_policy.lambda.arn
}

resource "aws_iam_policy" "lambda" {
  name   = "${var.project_name}-lambda"
  policy = data.aws_iam_policy_document.lambda.json
}
#
data "aws_iam_policy_document" "lambda" {
  statement {
    effect = "Allow"
    actions = [
      "lambda:InvokeFunction"
    ]
    resources = [
      aws_lambda_function.palindrome_lambda.arn
    ]
  }
  statement {
    effect    = "Allow"
    actions   = ["logs:CreateLogGroup"]
    resources = ["*"]
  }
  statement {
    effect = "Allow"
    actions = [
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = ["*"]
  }
}
#


#
resource "aws_iam_role_policy_attachment" "s3" {
  role       = aws_iam_role.role.name
  policy_arn = aws_iam_policy.s3.arn
}

resource "aws_iam_policy" "s3" {
  name   = "${var.project_name}-s3"
  policy = data.aws_iam_policy_document.s3.json
}

data "aws_iam_policy_document" "s3" {
  statement {
    effect = "Allow"
    actions = [
      "s3:ListStorageLensConfigurations",
      "s3:ListAccessPointsForObjectLambda",
      "s3:GetAccessPoint",
      "s3:PutAccountPublicAccessBlock",
      "s3:GetAccountPublicAccessBlock",
      "s3:ListAllMyBuckets",
      "s3:ListAccessPoints",
      "s3:ListJobs",
      "s3:PutStorageLensConfiguration",
      "s3:ListMultiRegionAccessPoints",
      "s3:CreateJob"
    ]
    resources = ["*"]
  }
  statement {
    effect = "Allow"
    actions = [
      "s3:*"
    ]
    resources = [
      aws_s3_bucket.public_bucket.arn,
      "${aws_s3_bucket.public_bucket.arn}/*",
    ]
  }
}


resource "aws_iam_role_policy_attachment" "lambda_dynamoroles" {
  role       = aws_iam_role.role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
}