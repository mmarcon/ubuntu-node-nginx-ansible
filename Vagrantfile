# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'

current_dir = File.dirname(File.expand_path(__FILE__))
digitalocean_config_file = File.join(current_dir, 'digitalocean', 'config.yml')
digitalocean_default_config_file = File.join(current_dir, 'digitalocean', 'config.default.yml')
configs = if File.file?(digitalocean_config_file)
            YAML.load_file(digitalocean_config_file)
          else
            YAML.load_file(digitalocean_default_config_file)
          end


Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 80, host: 8080

  # No need to sync the vagrant folder, everything gets deployed
  # with the ansible playbook
  config.vm.synced_folder '.', '/vagrant', :disabled => true

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = false
    vb.memory = "512"
  end

  # Confugration for DigitalOcean
  config.vm.provider :digital_ocean do |provider, override|
    override.ssh.private_key_path = '~/.ssh/id_rsa'
    override.vm.box = 'digital_ocean'

    provider.token = configs['token']
    provider.image = configs['image']
    provider.region = configs['region']
    provider.size = configs['size']
  end

  config.vm.provision :ansible do |ansible|
    ansible.playbook = "playbook.yml"
  end
end
