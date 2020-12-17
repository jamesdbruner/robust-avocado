#!/bin/sh
set -eu

TOKEN=$(curl -u $SSO_CLIENT_ID:$SSO_SECRET \
  -H 'Content-Type:application/x-www-form-urlencoded' \
  -H 'Accept:application/json' \
  -d 'grant_type=client_credentials' \
  https://uatsso.clearlink.com/v1/token/jwt/ | jq -r .access_token)

# Hardcoded Loom URL because we absolutely never want to send this request anywhere but staging.
curl -H 'Content-Type:application/json' \
  -H "Authorization: Bearer $TOKEN" \
  -d "{\"site_id\": \"$SITE_ID\"}" \
  https://loom.stage.clear.link/api/builds

echo "\n"
