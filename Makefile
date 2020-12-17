.DEFAULT:
	@echo 'Ops targets:'
	@echo
	@echo '    mirror-to-github    mirror the repo to github for Gatsby Preview'
	@echo '    deploy-staging      trigger a staging build through Loom'
	@echo

default: .DEFAULT

mirror-to-github:
	./mirror.sh

deploy-staging:
	@test $(SSO_CLIENT_ID) || (echo "no SSO_CLIENT_ID"; exit 1)
	@test $(SSO_SECRET) || (echo "no SSO_SECRET"; exit 1)
	@test $(SITE_ID) || (echo "no SITE_ID"; exit 1)
	./deploy-to-staging.sh
