#!/bin/bash

OUTPUT_FOLDER=out

# remove html extensions
find ${OUTPUT_FOLDER} -name "*.html" | while read i; do mv "$i" "${i%.html}"; done

# add html extension to index and 404
mv ${OUTPUT_FOLDER}/404 ${OUTPUT_FOLDER}/404.html
mv ${OUTPUT_FOLDER}/index ${OUTPUT_FOLDER}/index.html
