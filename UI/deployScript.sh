#!/bin/bash
yarn build 
aws s3 sync ./build s3://natekester.com 
 aws cloudfront create-invalidation --distribution-id EMBM20U6U3I6E --paths "/*"