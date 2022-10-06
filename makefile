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
	docker exec -it backoffice_renew_local sh
log:
	docker logs -f backoffice_renew_local

clean-dev:
	docker rm -f app-dev && docker rmi -f registry.gitlab.com/app-backoffice-re-new:development
build-dev:
	docker --debug build -t registry.gitlab.com/app-backoffice-re-new:development -f ./docker/Dockerfile . --build-arg NODE_ENV=development --no-cache
start-dev:
	docker run -i -t --name app-dev -p 80:80 registry.gitlab.com/app-backoffice-re-new:development
stop-dev:
	docker rm -f app-dev
exec-dev:
	docker exec -it app-dev sh
log-dev:
	docker logs -f app-dev
