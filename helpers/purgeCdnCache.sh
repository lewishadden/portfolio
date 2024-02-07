#!/bin/bash

set -e

if [[ -z "${DO_API_SECRET_KEY}" ]]; then
    echo "I require DO_API_SECRET_KEY to be set."
    echo "Please create a .env file and include an DO_API_SECRET_KEY entry. For Example:"
    echo "DO_API_SECRET_KEY=my-secret-key"
    exit 1
fi

if [[ -z "${S3_CDN_ID}" ]]; then
    echo "I require S3_CDN_ID to be set."
    echo "Please create a .env file and include an S3_CDN_ID entry. For Example:"
    echo "S3_CDN_ID=my-cdn-id"
    exit 1
fi

echo "Purging CDN cache"

curl -X DELETE -H "Content-Type: application/json" \
    -H "Authorization: Bearer $DO_API_SECRET_KEY" \
    -d '{"files": ["*"]}' \
    "https://api.digitalocean.com/v2/cdn/endpoints/${S3_CDN_ID}/cache"

echo "CDN cache purged sucessfully"
