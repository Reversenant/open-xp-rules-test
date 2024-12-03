#!/bin/bash

found_count=0
deleted_count=0

find . -type f -name "metainfo.yaml" | while read -r file; do
  if grep -q "ObjectId: PT" "$file"; then
    found_count=$((found_count + 1))
    
    dir=$(dirname "$file")
    echo "Удаление папки: $dir"
    rm -rf "$dir"
    
    deleted_count=$((deleted_count + 1))
  fi
done

echo "Найдено папок с metainfo.yaml, содержащих 'ObjectId: PT': $found_count"
echo "Удалено папок: $deleted_count"
