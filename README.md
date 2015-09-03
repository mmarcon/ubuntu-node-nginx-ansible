# Ubuntu + Node.js + PM2 + Nginx with Ansible

This repository contains a basic skeleton for an multi-app/multi-service environment based on node.js.

Nginx is in front of the node.js apps and acts as a reverse proxy.

The Ansible playbook deploys the setup to an Ubuntu host.

This setup can be used for development via Vagrant. Next step will be to test the deployment to DigitalOcean.

## Setup

 * install VirtualBox
 * install Vagrant
 * install Ansible
 * fetch the franklinkim.nodejs role with `ansible-galaxy install -r requirements.yml`
 * run `vagrant up` to spin up the virtual machine

## Result

With the steps above you get the following:

 * a *ubuntu/trusty64* VM
 * 2 *Hello World* Node.js apps
 * [PM2](https://github.com/Unitech/pm2) as the process manager for the 2 Node.js apps
 * Nginx running on port 80:
     - / serves the default Nginx welcome page
     - /app is a reverse proxy call for app.js
     - /otherapp is a reverse proxy call for otherapp.js
 * Vagrant forwards port 80 to 8080 

Copy `keymetrics/vars.default.yml` to `keymetrics/vars.yml` and replace the content with

    ---
    ### keymetrics configuration
    keymetrics: yes
    keymetrics_public_key: YourKeymetricsPublicKey
    keymetrics_secret_key: YourKeymetricsSecretKey

and you will also see the dashboard with both apps in [Keymetrics](https://keymetrics.io/).
