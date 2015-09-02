# Ubuntu + Node.js + Nginx with Ansible

This repository contains a basic skeleton for an multi-app/multi-service environment based on node.js.

Nginx is in front of the node.js apps and acts as a reverse proxy.

The Ansible playbook deploys the setup to an Ubuntu host.

This setup can be used for development via Vagrant. Next step will be to test the deployment to DigitalOcean.

## Setup

 * install VirtualBox
 * install Vagrant
 * fetch the franklinkim.nodejs role with `ansible-galaxy install -r requirements.yml`
 * run `vagrant up` to spin up the virtual machine