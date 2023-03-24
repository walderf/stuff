#!/bin/bash
IPADDR=$(wget -q -O- https://whatismyip.akamai.com --no-check-certificate)
echo $IPADDR

