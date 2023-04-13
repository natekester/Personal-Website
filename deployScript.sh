#!/bin/bash
yarn run-script build
aws s3 sync ./build s3://natekester.com 
