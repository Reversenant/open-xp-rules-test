#!/bin/bash

find . -type f -name "metainfo.yaml" | while read -r file; do
  if grep -q "ObjectId: PT" "$file"; then
    dir=$(dirname "$file")
    echo "Удаление папки: $dir"
    rm -rf "$dir"
  fi
done
