#!/bin/bash

# Set the paths to the hard link files
HARDFILE1="./template/node_modules/@esbuild/linux-x64/bin/esbuild"
HARDFILE2="./template/node_modules/esbuild/bin/esbuild"

# Check if the files exist
if [ -f "$HARDFILE1" ]; then
  echo "Removing hard link $HARDFILE1"
  rm "$HARDFILE1"
  echo "Creating symlink for $HARDFILE1"
  ln -s ../../../esbuild/bin/esbuild "$HARDFILE1"
else
  echo "$HARDFILE1 does not exist"
fi

if [ -f "$HARDFILE2" ]; then
  echo "Removing hard link $HARDFILE2"
  rm "$HARDFILE2"
  echo "Creating symlink for $HARDFILE2"
  ln -s ../../@esbuild/linux-x64/bin/esbuild "$HARDFILE2"
else
  echo "$HARDFILE2 does not exist"
fi

echo "Link fixing completed."
