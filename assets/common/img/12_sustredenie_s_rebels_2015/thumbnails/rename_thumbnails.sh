#!/bin/sh
num=1
dir1="$(basename $(dirname "$PWD"))"
dir2="$(basename "$PWD")"
for file in *.JPG *.jpg; do
       mv "$file" "$(printf "${dir1}_${dir2}_$num").jpg"
       let num=$num+1
done
