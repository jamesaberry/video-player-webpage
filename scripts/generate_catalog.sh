#!/bin/bash
echo ""
echo "================================================"
echo " Creating New Photo Listing JSON"
echo "================================================"

firstFile="true"
directory=$(dirname $0)
cd $directory
rm -f ../src/assets/photoNames.json
echo "{\"image_names\": [" >> ../src/assets/photoNames.json

for fullfile in ../src/assets/photos/*.jpg; do
	filename=$(basename -- "$fullfile")
	if [ "$firstFile" = "true" ]; then
		echo "\"$filename\"" >> ../src/assets/photoNames.json
		firstFile="false"
	else
		echo ",\"$filename\"" >> ../src/assets/photoNames.json
	fi
done

echo "]}" >> ../src/assets/photoNames.json

