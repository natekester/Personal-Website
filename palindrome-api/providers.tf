terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.17"
    }
  }
}

provider "aws" {
  #variables.tf file not-committed for obvious reasons
  region     = var.region
  access_key = var.access_key
  secret_key = var.secret_key

  default_tags {
    tags = var.tags
  }
}

data "aws_caller_identity" "current" {}
