# stuff - a collection of various ~~useful~~ things  

### table of contents  

* [links to stuff](#links-to-stuff) - hyperlinks to websites on the world wide web  
* [scripts](#scripts) - shell scripts    
  * **[bash](#\<-bash-scripts->)**   
    * [colorme.sh](#colorme) - 16 colors with pretty format  
    * [showcolors.sh](#showcolors) - displays either 16 or 256 colors, defaults to 16  
    * [getip.sh](#getip) - HTTP request to output public facing IP address   
* [functions](#functions) - shell functions  
  * **[bash](#\<-bash-functions->)**  
    * [faketty()](#faketty) - allows color output for piped commands  
  * **[zsh](#\<-zsh-functions->)**  
    * [currdate()](#currdate) - unfinished, sets $DATE, a variable with a future in file naming
---  
<br />
<br />
### links to stuff
* **GitPop3** - *"Find the most popular fork on GitHub."*  
<https://andremiras.github.io/gitpop3/>  

* **awesome-selfhosted** - *a list of software for self-hosting of services*  
<https://github.com/awesome-selfhosted/awesome-selfhosted>
---
<br />
<br />

### scripts

##### \< bash scripts >

## colorme  
 - outputs 16 colors with a pretty format

  ->  [colorme.sh](scripts/colorme.sh)  <-  
	->  [colorme-screenshot.png](screenshots/colorme-screenshot.png)  <-  
  
![colorme.sh screenshot](screenshots/colorme-screenshot.png)  

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
---
<br />
<br />

## showcolors  
 - outputs either 16 or 256 colors, defaults to 16

  ->  [showcolors.sh](scripts/showcolors.sh)  <-  
	->  [showcolors256-screenshot.png](screenshots/showcolors256-screenshot.png)  <-  
  
![showcolors.sh --256 screenshot](screenshots/showcolors256-screenshot.png)  

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
---
<br//>
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
<br />
<br />

### functions

##### \< bash functions >

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
<br />
<br />

##### \< zsh functions >

## currdate
- **\[unfinished]** a function who has a future in naming files, provides $DATE env variable

```zsh
# setting a $DATE variable for use with file naming
zmodload zsh/datetime
alias currdate='strftime "%m-%d-%Y" $EPOCHSECONDS'
export DATE=`currdate`
```
---
<br />
<br />

---
