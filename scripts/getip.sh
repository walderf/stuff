#!/bin/bash
IPADDR=$(wget -q -O- http://whatismyip.akamai.com --no-check-certificate)
echo $IPADDR

