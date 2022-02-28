# stuff - a collection of various ~~useful~~ things  

### table of stuff  

* [links to stuff](#links-to-stuff) - hyperlinks to websites on the world wide web  
* [script stuff](#script-stuff) - shell scripts  
  * **[bash](#--bash-shell-scripts--)**   
    * [colorme.sh](#colorme) - 16 colors displayed using pretty format  
    * [showcolors.sh](#showcolors) - displays either 16 or 256 colors, defaults to 16  
    * [getip.sh](#getip) - HTTP request to output public facing IP address  
* [stuff for shells](#stuff-for-shells) - some shell functions, aliases, and stuff  
  * **[bash functions](#--bash-shell-functions--)** :small_orange_diamond:
    * [faketty()](#faketty) - allows color output for piped commands  
  * **[zsh functions](#--zsh-shell-functions--)** :small_orange_diamond:
    * [currdate()](#currdate) - unfinished, sets $DATE, a variable with a future in file naming  
---  

[`^`](#)

<br />

# links to stuff  
---
## :small_orange_diamond: **GitPop3** :small_orange_diamond:
  * #### `"Find the most popular fork on GitHub."
  * ### <https://andremiras.github.io/gitpop3/>
---
## :small_orange_diamond: **awesome-selfhosted** :small_orange_diamond:
  * #### `a list of software for self-hosting of services 
  * ### <https://github.com/awesome-selfhosted/awesome-selfhosted>  
---
## :small_orange_diamond: **awesome-sysadmin** :small_orange_diamond:
  * #### `a list of open source sysadmin resources  
  * ### <https://github.com/awesome-foss/awesome-sysadmin>  

## :small_orange_diamond: **awesome-security** :small_orange_diamond:
  * #### `a list of security related software, libraries, resources, etc  
  * ### <https://github.com/sbilly/awesome-security#monitoring--logging>  

## :small_orange_diamond:  **systemd tips & tricks** :small_orange_diamond:
  * #### `tips & tricks for systemd  
  * ### <https://www.freedesktop.org/wiki/Software/systemd/TipsAndTricks/>  

## :small_orange_diamond:  **Operational Awareness** :small_orange_diamond:
  * #### `"Cyber Operations: Building, Defending, and Attacking Modern Computer Networks"  
  * ### <https://goois.net/3-operational-awareness-cyber-operations-building-defending-and-attacking-modern-computer-networks.html>  

## :small_orange_diamond:  **a handy arch related wiki** :small_orange_diamond:
  * #### `solid, detailed hardening configurations and various tips  
  * ### <https://kyau.net/wiki/Category:Arch_Linux>  

## :small_orange_diamond:  **grml zsh** :small_orange_diamond:
  * #### `home of grml-zsh-config - ***the*** zsh config
  * ### <https://grml.org/zsh/>  

## :small_orange_diamond:  **linux post-installation tasks** :small_orange_diamond:
  * #### `from fedora, good over-all information and reference  
  * ### <https://docs.fedoraproject.org/en-US/fedora-server/sysadmin-postinstall/>  

## :small_orange_diamond:  **RoseHosting blog** :small_orange_diamond:
  * #### `hundreds of linux related posts with good information
  * ### <https://www.rosehosting.com/blog/>  

## :small_orange_diamond:  **bash scripting cheatsheet** :small_orange_diamond:
  * #### `"The Only Bash Scripting Cheat Sheet That You Will Ever Need"  
  * ### <https://dev.to/bobbyiliev/the-only-bash-scripting-cheat-sheet-that-you-will-ever-need-55c7>  

## :small_orange_diamond: **learning the shell** :small_orange_diamond:
  * #### `commandline and scripting reference, free book(s) for download  
  * ### <https://linuxcommand.org/lc3_learning_the_shell.php>  

## :small_orange_diamond:  **joplin/plugins** :small_orange_diamond:
  * #### `official joplin plugin repository  
  * ### <https://github.com/joplin/plugins>  

## :small_orange_diamond:  **the book of secret knowledge** :small_orange_diamond:
  * #### `manuals, cheatsheets, blogs, hacks, one-liners, cli tools, etc  
  * ### <https://github.com/trimstray/the-book-of-secret-knowledge>  

## :small_orange_diamond:  **malware analysis tools list** :small_orange_diamond:
  * #### `extensive list of hacker shit, i don't know much else  
  * ### <https://0x1.gitlab.io/security/Malware-Analysis-Tools-List/#browser-malware>  

## :small_orange_diamond:  **linux workstation security checklist** :small_orange_diamond:
  * #### `security checklist for the linux workstation  
  * ### <https://github.com/lfit/itpol/blob/master/linux-workstation-security.md>  

## :small_orange_diamond:  **fzf usage examples** :small_orange_diamond:
  * #### `fzf implemtations, usage examples, scripts, etc.  
  * ### <https://github.com/junegunn/fzf#usage>  

## :small_orange_diamond:  **Privacy Guides** :small_orange_diamond:
  * #### `good resource with vetted privacy-oriented solutions  
  * ### <https://www.privacyguides.org/>  

## :small_orange_diamond:  **Privacy Tools** :small_orange_diamond:
  * #### `*the original resource with vetted privacy-oriented solutions
  * ### <https://www.privacytools.io/>  

## :small_orange_diamond:  **stargraph** :small_orange_diamond:
  * #### `github star history plots, neat graphs about top github projects  
  * ### <https://github.com/nschloe/stargraph>  

## mall_orange_diamond:  **bufferbloat and speedtest** :small_orange_diamond:
  * #### `speedtest tool like dslreport's test, works in modern browsers  
  * ### <https://www.waveform.com/tools/bufferbloat>  

## :small_orange_diamond:  **vermaden's sysadmin blog** :small_orange_diamond:
  * #### `lots of FreeBSD and server related guides from a sysadmin  
  * ### <https://vermaden.wordpress.com/>   

## :small_orange_diamond:  **calomel -nix guides** :small_orange_diamond:
  * #### `"Open Source Resource and Reference"  lots of guides, etc.  
  * ### <https://calomel.org/>  
---

[`^`](#)

<br />

# script stuff

###### \- bash shell scripts -  

## colorme  
 - outputs 16 colors with a pretty format

  ->  [colorme.sh](scripts/colorme.sh)  <-  
	->  [colorme-screenshot.png](screenshots/colorme-screenshot.png)  <-  
  
<details><summary>show screenshot</summary>

![colorme.sh screenshot](screenshots/colorme-screenshot.png)  

</details>  
  
<details><summary>show script source code</summary>

```bash
#!/bin/bash
#
# basic 16 color codes output in nice format
#
saythis='butts'
echo -e "\n\t   40m\t   41m\t   42m\t   43m\t   44m\t   45m\t   46m\t   47m";
for lfg in 'm' '1m' '30m' '1;30m' '31m' '1;31m' '32m' '1;32m' '33m' '1;33m' '34m' '1;34m' '35m' '1;35m' '36m' '1;36m' '37m' '1;37m';
  do sfg=${lfg//\t/}
  echo -en "$lfg\t"
  for sbg in 40m 41m 42m 43m 44m 45m 46m 47m;
    do echo -en " \033[$sfg\033[$sbg $saythis \033[0m";
  done
 echo
done
```

</details>  

- - -
<br />


## showcolors  
 - outputs either 16 or 256 colors, defaults to 16

  ->  [showcolors.sh](scripts/showcolors.sh)  <-  
	->  [showcolors256-screenshot.png](screenshots/showcolors256-screenshot.png)  <-  
  
<details><summary>show screenshot</summary>

![showcolors.sh --256 screenshot](screenshots/showcolors256-screenshot.png)

</details>  
  
<details><summary>show script source code</summary>

```bash
#!/bin/bash
#
USAGE="\nusage:\n\tshowcolors [ -t 256,16 | --term 256,16 | --256, --16 | 256, 16 ]\nexamples:\n\tshowcolors -t 256 \n\tshowcolors 256\n\tshowcolors -16\n\tshowcolors --term 256\ndefault:\n\tshowcolors --term 16\n"
if [[ -z $1 ]];
  then
    echo -e "{$USAGE}"
		term=16
		echo -e "\n\n\t\tno arguments were passed; assuming \"--term 16\"\n\n"
	elif [[ $1 =~ ^(-t|--term) ]]; then
    term="$2"
  elif [[ $1 =~ ^(-256|256|--256) ]];  then 
    term=256
  elif [[ $1 =~ ^(-16|16|--16) ]]; then
    term=16
fi

case $term in
      256)			
      for fgbg in 38 48 ; do # Foreground / Background
        for color in {0..255} ; do # Colors
            # Display the color
            printf "\e[${fgbg};5;%sm  %3s  \e[0m" $color $color
            # Display X colors per lines
            if [ $((($color + 1) % 12)) == 4 ] ; then
                echo # New line
            fi
        done
        echo # New line
      done
		  exit 0
    ;;
    16)      
				saythis='butts'
				echo -e "\n\t   40m\t   41m\t   42m\t   43m\t   44m\t   45m\t   46m\t   47m";
				for lfg in 'm' '1m' '30m' '1;30m' '31m' '1;31m' '32m' '1;32m' '33m' '1;33m' '34m' '1;34m' '35m' '1;35m' '36m' '1;36m' '37m' '1;37m';
				 do sfg=${lfg//\t/}
				echo -en "$lfg\t"
				for sbg in 40m 41m 42m 43m 44m 45m 46m 47m;
				do echo -en " \033[$sfg\033[$sbg $saythis \033[0m";
				done
				 echo
				done
    ;;
    *)
      echo -e "{$USAGE}"
      exit 1
  	;;
esac
```

</details>  

- - -
<br />


## getip
 - sends HTTP request to output public facing IP  

  ->  [getip.sh](scripts/getip.sh)  <-  
	
```bash
#!/bin/bash
IPADDR=$(wget -q -O- http://whatismyip.akamai.com --no-check-certificate)
echo $IPADDR
```
---

[`^`](#)

<br />

# stuff for shells



###### \- bash shell functions -  


## faketty  
 - allows color output for piped commands

```bash
#
# ALLOW COLOR OUTPUT FOR PIPED COMMANDS
#
#  Usage: faketty <command> <args>
#

faketty() {
    script -qfc "$(printf "%q " "$@")" /dev/null
}
```
---

[`^`](#)

###### \- zsh shell functions -  

## currdate
- **\[unfinished]** a function who has a future in naming files, provides $DATE env variable

```zsh
# setting a $DATE variable for use with file naming
zmodload zsh/datetime
alias currdate='strftime "%m-%d-%Y" $EPOCHSECONDS'
export DATE=`currdate`
```
---

[`^`](#)

<br />
