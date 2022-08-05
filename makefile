# storybook
build_storybook:
	docker-compose -f ./docker/storybook.yml build storybook
run_storybook:
	docker-compose -f ./docker/storybook.yml up -d storybook

# local developemnt
build:
	docker-compose build
start:
	docker-compose up -d
stop:
	docker-compose down
exec:
	docker exec -it fixtab_backoffice_renew_local sh
log:
	docker logs -f fixtab_backoffice_renew_local

clean-dev:
	docker rm -f fixtab-dev && docker rmi -f registry.gitlab.com/magicboxsolutionsco.ltd/softwaredvelopment/fixtab/fixtab-backoffice-re-new:development
build-dev:
	docker --debug build -t registry.gitlab.com/magicboxsolutionsco.ltd/softwaredvelopment/fixtab/fixtab-backoffice-re-new:development -f ./docker/Dockerfile . --build-arg NODE_ENV=development --no-cache
start-dev:
	docker run -i -t --name fixtab-dev -p 80:80 registry.gitlab.com/magicboxsolutionsco.ltd/softwaredvelopment/fixtab/fixtab-backoffice-re-new:development
stop-dev:
	docker rm -f fixtab-dev
exec-dev:
	docker exec -it fixtab-dev sh
log-dev:
	docker logs -f fixtab-dev
