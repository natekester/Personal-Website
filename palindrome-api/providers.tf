terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.17"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  #checkov:skip=CKV_AWS_41:Allowing creds as var for sake of learning, but in real world env variables or aws cli based tools should be used
  region     = var.region
  access_key = var.access_key
  secret_key = var.secret_key

  default_tags {
    tags = var.tags
  }
}

data "aws_caller_identity" "current" {}
