#!/bin/sh

cp CNAME dist/
cp robots.txt dist/
cp sitemap.xml dist/
cp -r .git dist/
cd dist/
git add .
git commit -m "deploying dist in master"
git push origin master
