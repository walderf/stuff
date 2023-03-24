#!/bin/bash
#
# the original akamai site stopped working sometime around the end of 2021 
# but i've decided to leave the original code in for posterity
#
#IPADDR=$(wget -q -O- https://whatismyip.akamai.com --no-check-certificate)
#echo $IPADDR
#
IPADDR=$(dig +short myip.opendns.com @resolver1.opendns.com)
echo $IPADDR
