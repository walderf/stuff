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

