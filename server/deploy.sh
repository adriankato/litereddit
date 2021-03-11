#!/bin/bash
echo What should the version be?

read VERSION

docker build -t adriankato/litereddit:$VERSION .
docker push adriankato/litereddit:$VERSION

ssh root@204.48.18.31 "docker pull adriankato/litereddit:$VERSION && docker tag adriankato/litereddit:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"
