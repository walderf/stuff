#!/bin/bash
#
# the original akamai site stopped working sometime around the end of 2021 
# but i've decided to leave the original code in for posterity
#
#IPADDR=$(wget -q -O- https://whatismyip.akamai.com --no-check-certificate)
#echo $IPADDR
#
# note: might not work with some VPN providers and/or public DNS providers, largely untested...
#       ... meaning, i am not 100% sure or even 67% sure of the actual root of the issue(s).
#
# another note: if you experience network issues, try resolver2, 3, 4, etc... 
#               ...worse case, you can't use the fancy DNS query below to find your IP...
#               ... and need to use the original code above. 
#
IPADDR=$(dig +short myip.opendns.com @resolver1.opendns.com)
echo $IPADDR
