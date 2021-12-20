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

