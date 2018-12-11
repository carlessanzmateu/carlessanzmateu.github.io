#!/bin/sh

echo 'removing old master'
git branch -D master

echo 'create updated master'
git checkout -b master

echo 'create dist'
npm run build

echo 'add all SEO files'
cp CNAME dist/
cp robots.txt dist/
cp sitemap.xml dist/

echo 'add git tracking to dist'
cp -r .git dist/

echo 'moving to dist'
cd dist/

echo 'adding and commiting'
git add .
git commit -m "deploying dist in master"

echo 'pushing branch'
git push origin master --force

echo 'script finished!'
