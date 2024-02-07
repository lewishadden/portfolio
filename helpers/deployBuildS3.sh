#!/bin/bash

set -e

command -v s3cmd >/dev/null 2>&1 || {
    echo >&2 "I require s3cmd but it's not installed.  Aborting."
    exit 1
}

if [[ ! (-f ~/.s3cfg) ]]; then
    echo "I require s3cmd to be configured."
    echo "Please run 's3cmd --configure' and try again."
    exit 1
fi

if [[ -z "${S3_BUCKET}" ]]; then
    echo "I require S3_BUCKET to be set."
    echo "Please create a .env file and include an S3_BUCKET entry. For Example:"
    echo "S3_BUCKET=my-bucket-name"
    exit 1
fi

DOMAIN="s3://${S3_BUCKET}"

s3cmd sync dist/ "$DOMAIN" --acl-public --delete-removed --no-mime-magic --guess-mime-type --exclude=.DS_Store -H --add-header=Cache-Control:max-age=86400

echo "Deployed build successfully"
