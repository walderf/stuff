#!/bin/bash

# error on unset variables 
set -o nounset
set +u
# pacman.conf location
pacman_conf="/etc/pacman.conf"

# easy colors
reset="\033[0m"
bold="\033[1m"
ul="\033[4m"
inverse="\033[7m"
black="\033[30m"
red="\033[31m"
green="\033[32m"
yellow="\033[33m"
blue="\033[34m"
magenta="\033[35m"
cyan="\033[36m"
white="\033[37m"
blackbg="\033[40m"
redbg="\033[41m"
greenbg="\033[42m"
yellowbg="\033[43m"
bluebg="\033[44m"
magentabg="\033[45m"
cyanbg="\033[46m"
whitebg="\033[47m"

# setup a temporary directory in /tmp/
tmp_dir=$(mktemp -d)

# setup temporary files in our freshly created ${tmp_dir}
tmp_inst=$(mktemp --tmpdir="${tmp_dir}")
tmp_chaotic=$(mktemp --tmpdir="${tmp_dir}")
tmp_common=$(mktemp --tmpdir="${tmp_dir}")
tmp_aur=$(mktemp --tmpdir="${tmp_dir}")

# list of all currently installed packages
count_installed=$(yay -Qq | sort | tee "${tmp_inst}" | wc -l)
# to get the list of every chaotic AUR package...
# ...we check the variable $[pacman_conf} to see... 
# ...if 'chaotic' occurs within a non-commented-out line
if  grep -qiP '^(?!^#).*chaotic' ${pacman_conf} ; then 
  yay -Slq chaotic-aur | sort > "${tmp_chaotic}"
  haschaos=TRUE
fi

# count and list the common files between the above two sorted lists
count_common=$(comm -12 "${tmp_inst}" "${tmp_chaotic}" | tee "${tmp_common}" | wc -l)
# count and list of all currently installed foreign (AUR) packages 
count_aur=$(yay -Qqm | tee "${tmp_aur}" | wc -l)
# count total number of "aur" packages
count_aur=$(yay -Qqm | tee "${tmp_aur}" | wc -l)
# count total number of "aur" packages
count_foreign="$((count_common+count_aur))"

# display some data

echo -e "<${ul}${bold}Foreign${reset}: ${bold}${yellow}${count_foreign}${reset}>\t<${ul}${bold}Total${reset}: ${bold}${yellow}${count_installed}${reset}>"
echo
if [ "${haschaos}" = TRUE ] ; then
  echo -e "<${ul}${bold}Chaotic-AUR${reset}: ${bold}${yellow}${count_common}${reset}>"
  awk '{print " - " $0}' "${tmp_common}"
fi
echo 
echo -e "<${ul}${bold}AUR${reset}: ${bold}${yellow}${count_aur}${reset}>"
awk '{print " - " $0}' "${tmp_aur}"
echo -e ""
rm -fr "${tmp_dir}"
exit
