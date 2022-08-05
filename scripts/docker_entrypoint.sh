#!/bin/sh
set -e
cmd="$@"
echo "BUILD_VERSION=$(cat /home/node/app/VERSION.txt)"
echo "execute $cmd"

exec $cmd
