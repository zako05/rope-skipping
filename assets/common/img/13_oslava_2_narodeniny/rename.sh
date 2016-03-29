#!/bin/sh
num=1
for file in *.JPG *.jpg *.png; do
       mv "$file" "$(printf '%s\n' "${PWD##*/}_$num").jpg"
       let num=$num+1
done
