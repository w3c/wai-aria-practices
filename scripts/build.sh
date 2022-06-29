# Called from netify.toml

#git submodule update --init --remote --recursive
#if ! which respec; then npm install --global respec; fi
#respec2html --src ./_external/aria-practices/aria-practices.html --out ./html/aria-practices.html
#npm install -C scripts/pre-build
#node ./scripts/pre-build
bundle exec jekyll build --config '_config.yml,_config_staging.yml'
