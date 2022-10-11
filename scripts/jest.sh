#!/bin/sh

TYPE=$1
NAME=$2
COLLECT_COVERAGE_PATH=**/$NAME

if [ $TYPE = "-f" ]; then
  COLLECT_COVERAGE_PATH=**/$NAME/**/*
else
  NAME=$TYPE.test
  COLLECT_COVERAGE_PATH=**/$TYPE.tsx
fi

IGNORE_SNAPSHOTS=!src/**/__snapshots__/**/*
COLLECT_PATH="[\"$COLLECT_COVERAGE_PATH\",\"$IGNORE_SNAPSHOTS\"]"

yarn test:cv:msg -u --collectCoverageFrom=$COLLECT_PATH --testPathPattern $NAME
