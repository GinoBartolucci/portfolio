cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:GinoBartolucci/portfolio.git main:gh-pages

cd -