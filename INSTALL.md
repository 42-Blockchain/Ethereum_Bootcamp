### Setting up Hardhat at 42
___

#### Install `brew`

```
rm -rf "$HOME/.brew" \
&& git clone --depth=1 https://github.com/Homebrew/brew "$HOME/.brew" \
&& export PATH="$HOME/.brew/bin:$PATH" \
&& brew update \
&& echo 'export PATH="$HOME/.brew/bin:$PATH"' >> ~/.zshrc 
```

:heavy_check_mark: you should be able to `brew list`

#### Install `nvm`

```
mkdir ~/.nvm \
&& brew install nvm \
&& echo 'export NVM_DIR="$HOME/.nvm"
    [ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && \. "$(brew --prefix)/opt/nvm/nvm.sh" # This loads nvm
    [ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && \. "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" # This loads nvm bash_completion' >> ~/.zshrc
```

:heavy_check_mark: you should be able to `nvm list`

#### Install `node` 16.13.2 (latest LTS)

```
nvm install 16.13.2
```
___
:construction: :construction_worker: Now you ready ! :construction_worker: :construction:

See `hardhat` install instructions at
```
https://hardhat.org/getting-started/
```
___

#### Reminder

At 42, your `home` capacity is 5Go.
Your `sgoinfre` goes up to 30Go.

See sgoinfre rules at
```
https://meta.intra.42.fr/articles/sgoinfre-s-rules
```
___
