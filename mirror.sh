
#!/bin/sh

#check an env variable so nobody does this accidentally on their own machine
[[ $MIRROR_TO_GITHUB != true ]] && exit 1
mkdir -p /root/.ssh/
eval `ssh-agent -s`

cat << EOF > /root/.ssh/config
Host github.com
 AddKeysToAgent yes
 Hostname github.com
 User git
 IdentityFile /root/.ssh/id_rsa
EOF

echo $GLOBAL_GITHUB_GATSBY_WRITE_KEY_BASE64 | base64 -d > /root/.ssh/id_rsa
chmod 400 /root/.ssh/id_rsa
ssh-add /root/.ssh/id_rsa
ssh-keyscan github.com >> /root/.ssh/known_hosts
git fetch --all
git remote add github git@github.com:clearlink/gatsby-preview-dish.git
git push github $BITBUCKET_BRANCH -f