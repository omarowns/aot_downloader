#!/bin/bash
MANGA_PATH='Attack-on-Titan/'

SRC_ROOT_PATH='/Users/your-user-name/Pictures/'
SRC_FULL_PATH=$SRC_ROOT_PATH$MANGA_PATH

DEST_ROOT_PATH='/Users/your-user-name/Documents/'
DEST_FULL_PATH=$DEST_ROOT_PATH$MANGA_PATH

if [ ! -d $DEST_FULL_PATH ]; then
  mkdir -p $DEST_FULL_PATH
fi

cd $SRC_FULL_PATH
for directory in `ls`
do
  zip "${DEST_FULL_PATH}${directory}.cbz" ${directory}/**
done
